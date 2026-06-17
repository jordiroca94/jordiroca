module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.jordirocasoler.com/',
        'https://www.jordirocasoler.com/en',
        'https://www.jordirocasoler.com/en/projects',
        'https://www.jordirocasoler.com/en/volunteering',
      ],
      numberOfRuns: 2,
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
