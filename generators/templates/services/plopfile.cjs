function plopFunction(plop) {
  plop.setGenerator('test', {
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: `Em qual caminho deseja criar?`
      },
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do arquivo?'
      }
    ],
    actions: function (data) {
      let actions = [];

      const path = '../../../src/service';

      actions.push({
        type: 'add',
        path: `${path}/{{path}}/{{camelCase name}}/{{camelCase name}}.service.ts`,
        templateFile: './services.ts.hbs'
      });

      return actions;
    }
  });
}

module.exports = plopFunction;
