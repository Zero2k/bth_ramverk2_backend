import _ from 'lodash';

export default {
  Query: {
    allReports: () => {
      let posts = [
        {
          id: '1',
          title: 'Kmom01 - Express',
          description: 'Vi skall bygga grunden till en applikations/webbplats med hjälp av ramverket Express. Express bygger på Node.js. Webbplatsen får bli vår me-sida och det blir en grund att jobba vidare på i kursen. Me-sidan får bli ett eget repo på GitHub som vi kopplar ihop med externa tjänster för automatiskt builds och kodkvalitet som blir basen i ett CI-flöde (Continuous integration).',
          text: 'test',
        },
        {
          id: '2',
          title: 'Kmom02 - Docker',
          description: 'Vi installerar Docker och gör det till en integrerad del av vårt repo och testmiljö. Det handlar om att använda virtualisering för att köra flera versioner av ett målsystem och använda för att testa koden i ditt repo.',
          text: '',
        },
        {
          id: '3',
          title: 'Kmom03 - Test',
          description: 'Vi orienterar oss kring olika tekniker och termer inom test och samtidigt bygger vi upp grunden i en testmiljö för JavaScript. Det handlar främst om enhetstestning och kodtäckning samt basen för en CI-kedja (Continuous integration). Det blir också en introduktion i hur vi kan använda Docker för att köra våra enhetstester mot olika versioner av en målmiljö och vi får möjligheten att skapa våra egna anpassade Docker-images.',
          text: '',
        },
        {
          id: '4',
          title: 'Kmom04 - Realtid',
          description: 'Vi skall studera realdtisprogrammering i webbsammanhang med webscokets. Vi bygger en enkel chatt för att se hur grunderna fungerar. Sedan bygger du vidare på din klient/server applikation i JavaScript och integrerar chatten och utvecklar ytterligare realtidsfunktioner.',
          text: '',
        },
        {
          id: '5',
          title: 'Kmom05 - Databas',
          description: 'TBD',
          text: '',
        },
        {
          id: '6',
          title: 'Kmom06 - Egen modul',
          description: 'TBD',
          text: '',
        }
      ]
      return posts;
    },
    singleReport: (parent, { id }, context ) => {
      let posts = [
        {
          id: 1,
          title: 'Kmom01 - Express',
          description: 'Vi skall bygga grunden till en applikations/webbplats med hjälp av ramverket Express. Express bygger på Node.js. Webbplatsen får bli vår me-sida och det blir en grund att jobba vidare på i kursen. Me-sidan får bli ett eget repo på GitHub som vi kopplar ihop med externa tjänster för automatiskt builds och kodkvalitet som blir basen i ett CI-flöde (Continuous integration).',
          text: 'test',
        },
        {
          id: 2,
          title: 'Kmom02 - Docker',
          description: 'Vi installerar Docker och gör det till en integrerad del av vårt repo och testmiljö. Det handlar om att använda virtualisering för att köra flera versioner av ett målsystem och använda för att testa koden i ditt repo.',
          text: '',
        },
        {
          id: 3,
          title: 'Kmom03 - Test',
          description: 'Vi orienterar oss kring olika tekniker och termer inom test och samtidigt bygger vi upp grunden i en testmiljö för JavaScript. Det handlar främst om enhetstestning och kodtäckning samt basen för en CI-kedja (Continuous integration). Det blir också en introduktion i hur vi kan använda Docker för att köra våra enhetstester mot olika versioner av en målmiljö och vi får möjligheten att skapa våra egna anpassade Docker-images.',
          text: '',
        },
        {
          id: 4,
          title: 'Kmom04 - Realtid',
          description: 'Vi skall studera realdtisprogrammering i webbsammanhang med webscokets. Vi bygger en enkel chatt för att se hur grunderna fungerar. Sedan bygger du vidare på din klient/server applikation i JavaScript och integrerar chatten och utvecklar ytterligare realtidsfunktioner.',
          text: '',
        },
        {
          id: 5,
          title: 'Kmom05 - Databas',
          description: 'TBD',
          text: '',
        },
        {
          id: 6,
          title: 'Kmom06 - Egen modul',
          description: 'TBD',
          text: '',
        }
      ]
      let result = _.find(posts, {'id': id});
      return result;
    },
  },
};
