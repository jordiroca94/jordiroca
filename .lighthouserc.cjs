module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.jordirocasoler.com/',
        'https://www.jordirocasoler.com/en',
        'https://www.jordirocasoler.com/en/projects',
        'https://www.jordirocasoler.com/en/volunteering',
        'https://www.jordirocasoler.com/es',
        'https://www.jordirocasoler.com/es/proyectos',
        'https://www.jordirocasoler.com/es/voluntariado',
        'https://www.jordirocasoler.com/de',
        'https://www.jordirocasoler.com/de/Projekte',
        'https://www.jordirocasoler.com/de/Freiwilligenarbeit',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
};
