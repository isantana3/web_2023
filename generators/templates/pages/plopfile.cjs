function plopFunction(plop) {
  plop.setGenerator('test', {
    prompts: [
      {
        type: 'input',
        name: 'context',
        message: 'Em qual contexto a página deve ficar?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da página?'
      },
      {
        type: 'checkbox',
        name: 'files',
        message: 'Quais arquivos além do principal você deseja criar?',
        choices: ['index', 'styles', 'types'],
        default: ['index', 'styles', 'types']
      }
    ],
    actions: function (data) {
      let actions = [];

      const path = '../../../src/pages/';

      actions.push({
        type: 'add',
        path: `${path}/{{pascalCase name}}/{{pascalCase name}}.page.tsx`,
        templateFile: './page.tsx.hbs'
      });

      if (data.files[0] === 'index') {
        actions.push({
          type: 'add',
          path: `${path}/{{pascalCase name}}/index.ts`,
          templateFile: './index.ts.hbs'
        });
      }

      if (data.files[1] === 'styles') {
        actions.push({
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.styles.ts`,
          templateFile: './styles.ts.hbs'
        });
      }

      if (data.files[2] === 'types') {
        actions.push({
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.types.ts`,
          templateFile: './types.ts.hbs'
        });
      }

      return actions;
    }
  });
}

module.exports = plopFunction;
