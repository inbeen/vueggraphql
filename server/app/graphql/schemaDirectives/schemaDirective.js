const { SchemaDirectiveVisitor } = require('graphql-tools');
const { defaultFieldResolver } = require('graphql');

class authDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    this.ensureFieldsWrapped(type);
    // type._requiredAuthRole = this.args.requires;
  }

  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType);
    // field._requiredAuthRole = this.args.requires;
  }

  ensureFieldsWrapped(objectType) {
    if (objectType._authFieldsWrapped) return;
    objectType._authFieldsWrapped = true;

    const fields = objectType.getFields();

    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;
      field.resolve = async (...args) => {
        // const requiredRole = field._requiredAuthRole || objectType._requiredAuthRole;

        // if (!requiredRole) {
        //   return resolve.apply(this, args);
        // }

        const ctx = args[2];
        const user = ctx.service.user.fetchByToken(ctx.headers.authorization);
        // if (!user.hasRole(requiredRole)) {
        //   throw new Error('Not authorized');
        // }
        if (!user) {
          throw new Error('Not authorized');
        }

        return resolve.apply(this, args);
      };
    });
  }
}

module.exports = {
  auth: authDirective,
};