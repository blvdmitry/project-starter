module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'New component creation',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.tsx',
      templateFile: 'tools/plop/template.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.pcss',
      templateFile: 'tools/plop/styles.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.types.ts',
      templateFile: 'tools/plop/types.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/index.ts',
      templateFile: 'tools/plop/index.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.story.tsx',
      templateFile: 'tools/plop/storybook.hbs'
    }]
  });
};
