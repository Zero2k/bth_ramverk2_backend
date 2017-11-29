import axios from 'axios';

describe('Test post resolvers in GraphQL', () => {
  test('It should return all posts', async () => {
    const response = await axios.post('http://localhost:8080/graphql', {
      query: `
      query {
        allReports {
          id
          text
          description
        }
      }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        "allReports": [
          {
            "id": 1,
            "text": "test",
            "description": "Vi skall bygga grunden till en applikations/webbplats med hjälp av ramverket Express. Express bygger på Node.js. Webbplatsen får bli vår me-sida och det blir en grund att jobba vidare på i kursen. Me-sidan får bli ett eget repo på GitHub som vi kopplar ihop med externa tjänster för automatiskt builds och kodkvalitet som blir basen i ett CI-flöde (Continuous integration)."
          },
          {
            "id": 2,
            "text": "",
            "description": "Vi installerar Docker och gör det till en integrerad del av vårt repo och testmiljö. Det handlar om att använda virtualisering för att köra flera versioner av ett målsystem och använda för att testa koden i ditt repo."
          },
          {
            "id": 3,
            "text": "",
            "description": "Vi orienterar oss kring olika tekniker och termer inom test och samtidigt bygger vi upp grunden i en testmiljö för JavaScript. Det handlar främst om enhetstestning och kodtäckning samt basen för en CI-kedja (Continuous integration). Det blir också en introduktion i hur vi kan använda Docker för att köra våra enhetstester mot olika versioner av en målmiljö och vi får möjligheten att skapa våra egna anpassade Docker-images."
          },
          {
            "id": 4,
            "text": "",
            "description": "Vi skall studera realdtisprogrammering i webbsammanhang med webscokets. Vi bygger en enkel chatt för att se hur grunderna fungerar. Sedan bygger du vidare på din klient/server applikation i JavaScript och integrerar chatten och utvecklar ytterligare realtidsfunktioner."
          },
          {
            "id": 5,
            "text": "",
            "description": "TBD"
          },
          {
            "id": 6,
            "text": "",
            "description": "TBD"
          }
        ]
      }
    });
  });
});
