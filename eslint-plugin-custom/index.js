module.exports = {
  rules: {
    'no-direct-rc-component-imports': {
      meta: {
        type: 'problem',
        docs: {
          description:
            'Disallow direct imports of @britishgassas/react-components while allowing subpath imports',
          category: 'Possible Errors',
          recommended: true,
        },
        fixable: 'code',
        schema: [], // no options
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            const importSource = node.source.value;

            if (importSource === '@britishgassas/react-components') {
              context.report({
                node,
                message:
                  'Direct imports from @britishgassas/react-components are not allowed. Please use specific subpath imports (e.g., @britishgassas/react-components/Button)',
              });
            }
          },
        };
      },
    },
  },
};
