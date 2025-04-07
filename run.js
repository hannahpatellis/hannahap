const Kiss = require('kiss-ssg');
const kiss = new Kiss(
  {
    dev: process.argv[2] === 'watch' ? true : false,
    verbose: false,
    cleanBuild: true,
    folders: {
      src: './src',
      build: './public',
      assets: './src/assets',
      layouts: './src/layouts',
      pages: './src/pages',
      partials: './src/partials',
      models: './src/models',
      controllers: './src/controllers'
    }
  }
);

/* Errors */
kiss.page({
  view: 'errors/403.hbs',
  title: 'Error 403 |',
  path: '/',
  slug: '403'
});
kiss.page({
  view: 'errors/404.hbs',
  title: 'Error 404 |',
  path: '/',
  slug: '404'
});
kiss.page({
  view: 'errors/500.hbs',
  title: 'Error 500 |',
  path: '/',
  slug: '500'
});

/* Primary Pages */
kiss.page({
  view: 'index.hbs',
  title: '',
  path: '/',
  slug: 'index'
});
kiss.page({
  view: 'about.hbs',
  title: 'About',
  path: '/',
  slug: 'about'
});
kiss.page({
  view: 'design.hbs',
  title: 'Design work |',
  path: '/',
  slug: 'design'
});
kiss.page({
  view: 'zines.hbs',
  title: 'Zines by',
  path: '/',
  slug: 'zines'
});
kiss.page({
  view: 'art.hbs',
  title: 'Art by',
  path: '/',
  slug: 'art'
});
kiss.page({
  view: 'shop.hbs',
  title: 'Shop',
  path: '/',
  slug: 'shop'
});

/* Design Pages */
kiss.page({
  view: 'designs/seesaw.hbs',
  title: 'Work for Seesaw Learning |',
  path: '/',
  slug: 'seesaw'
});
kiss.page({
  view: 'designs/clever.hbs',
  title: 'Work for Clever Inc. |',
  path: '/',
  slug: 'clever'
});
kiss.page({
  view: 'designs/2u.hbs',
  title: 'Work for 2U Inc. |',
  path: '/',
  slug: '2u'
});
kiss.page({
  view: 'designs/smokecartel.hbs',
  title: 'Work for Smoke Cartel |',
  path: '/',
  slug: 'smokecartel'
});
kiss.page({
  view: 'designs/cosmo.hbs',
  title: 'Collaborative Services Map of Opportunities |',
  path: '/',
  slug: 'cosmo'
});
kiss.page({
  view: 'designs/dailyui.hbs',
  title: '#dailyui |',
  path: '/',
  slug: 'dailyui'
});

/* Zine Pages */
kiss.page({
  view: 'zines/slut.hbs',
  title: 'Slut | Zines by',
  path: '/',
  slug: 'slut'
});
kiss.page({
  view: 'zines/southpole.hbs',
  title: 'South Pole | Zines by',
  path: '/',
  slug: 'southpole'
});
kiss.page({
  view: 'zines/waitingforyou.hbs',
  title: 'Waiting for You | Zines by',
  path: '/',
  slug: 'waitingforyou'
});
kiss.page({
  view: 'zines/iconic.hbs',
  title: 'I am ICONIC | Zines by',
  path: '/',
  slug: 'iconic'
});
kiss.page({
  view: 'zines/catfuremporium.hbs',
  title: 'Cat Fur Emporium | Zines by',
  path: '/',
  slug: 'catfuremporium'
});
kiss.page({
  view: 'zines/selfishandgrieving.hbs',
  title: 'Selfish and Grieving | Zines by',
  path: '/',
  slug: 'selfishandgrieving'
});
kiss.page({
  view: 'zines/decatranniversary.hbs',
  title: 'DecaTranniversary | Zines by',
  path: '/',
  slug: 'decatranniversary'
});
kiss.page({
  view: 'zines/sleepcomesafterdeath.hbs',
  title: 'Sleep Comes After Death | Zines by',
  path: '/',
  slug: 'sleepcomesafterdeath'
});
kiss.page({
  view: 'zines/runaway.hbs',
  title: 'Runaway | Zines by',
  path: '/',
  slug: 'runaway'
});
kiss.page({
  view: 'zines/cathedral.hbs',
  title: 'Cathedral | Zines by',
  path: '/',
  slug: 'cathedral'
});
kiss.page({
  view: 'zines/restinpeach.hbs',
  title: 'Rest in Peach | Zines by',
  path: '/',
  slug: 'restinpeach'
});

kiss.page({
  view: 'art/cstay_collection.hbs',
  title: 'Can\'t Stop Thinking About You | Art by',
  path: '/',
  slug: 'cstay'
});
kiss.page({
  view: 'art/wfy_collection.hbs',
  title: 'Waiting for You | Art by',
  path: '/',
  slug: 'waitingforyouart'
});
kiss.page({
  view: 'art/iconic_collection.hbs',
  title: 'ICONIC | Art by',
  path: '/',
  slug: 'iconiccollection'
});
kiss.page({
  view: 'art/era_collection.hbs',
  title: 'The Era | Art by',
  path: '/',
  slug: 'era'
});
kiss.page({
  view: 'art/journeynorth_collection.hbs',
  title: 'The Journey North | Art by',
  path: '/',
  slug: 'journeynorth'
});
kiss.page({
  view: 'art/prolific.hbs',
  title: 'PROlific Art Management Software by',
  path: '/',
  slug: 'prolific'
});
kiss.page({
  view: 'art/showcase.hbs',
  title: 'Showcase Hannah | Art by',
  path: '/',
  slug: 'showcase'
});

kiss.generate();