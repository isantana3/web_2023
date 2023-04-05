function plopFunction(plop) {
  plop.setGenerator('test', {
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: `Qual tipo de componente deseja criar?`,
        choices: ['base', 'global', 'outro']
      },
      {
        type: 'input',
        name: 'path',
        message: 'Caso tenha selecionado a opção "outro", em qual caminho o componente deve ficar?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente?'
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

      const path = '../../../src/components/'

      if (data.type !== 'outro') {
        actions.push(
          {
            type: 'add',
            path: `${path}{{type}}/{{pascalCase name}}/{{pascalCase name}}.component.tsx`,
            templateFile: './component.tsx.hbs'
          }
        );

        if (data.files[0] === 'index') {
          actions.push({
            type: 'add',
            path: `${path}{{type}}/{{pascalCase name}}/index.ts`,
            templateFile: './index.ts.hbs'
          })
        }

        if (data.files[1] === 'styles') {
          actions.push({
            type: 'add',
            path: `${path}{{type}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts`,
            templateFile: './styles.ts.hbs'
          })
        }

        if (data.files[2] === 'types') {
          actions.push({
            type: 'add',
            path: `${path}{{type}}/{{pascalCase name}}/{{pascalCase name}}.types.ts`,
            templateFile: './types.ts.hbs'
          })
        }
      }

      if (data.type === 'outro') {
        actions.push(
          {
            type: 'add',
            path: `../../../src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.component.tsx`,
            templateFile: './component.tsx.hbs'
          }
        );

        if (data.files[0] === 'index') {
          actions.push({
            type: 'add',
            path: `../../../src/{{path}}/{{pascalCase name}}/index.ts`,
            templateFile: './index.ts.hbs'
          })
        }

        if (data.files[1] === 'styles') {
          actions.push({
            type: 'add',
            path: `../../../src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts`,
            templateFile: './styles.ts.hbs'
          })
        }

        if (data.files[2] === 'types') {
          actions.push({
            type: 'add',
            path: `../../../src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.types.ts`,
            templateFile: './types.ts.hbs'
          })
        }
      }

      return actions;
    }
  });
}

module.exports = plopFunction;
