module.exports = {
  default: [
			  `--format-options '{"snippetInterface": "synchronous"}'`,
			  '--require acceptancetest/steps/**/*.js',
			   '--require acceptancetest/support/**/*.js',
			   'acceptancetest/features/**/*.feature',
			   '--require-module @babel/register'
		].join(' '),
}