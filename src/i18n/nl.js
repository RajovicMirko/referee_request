const nl = {
  messages: {
    error: {
      yup: {
        required: "Dit is een verplicht veld",
        email: "Dit is geen geldig e-mailadres",
      },
      api: {
        default: "Er is iets fout gegaan",
        403: "Er is iets fout gegaan",
        400: "Er klopt iets niet, controleer uw gegevens",
      },
    },
  },
  translation: {
    actions: {
      submit: "Indienen",
    },
    global: {
      personalData: "Persoonlijke Gegevens",
      matchData: "Wedstrijdgegevens",
      price: {
        main: "Prijs",
        text: "{{sign}} {{netPrice}} exclusief BTW. {{sign}} {{grossPrice}} inclusief BTW.",
      },
    },
    field: {
      placeholder: {
        club: "Selecteer Club",
        team: "Selecteer Team",
        date: {
          selectDateTime: "Selecteer Datum en Tijd",
        },
      },
      name: {
        main: "Naam",
        full: "Volledige Naam",
      },
      email: {
        main: "E-mail",
      },
      phone: {
        main: "Telefoonnummer",
      },
      clubAndTeam: {
        your: "Jouw Club en Team",
        home: "Thuis Club en Team",
        away: "Uit Club en Team",
      },
      date: {
        match: {
          start: "Starttijd Wedstrijd",
        },
      },
      field: {
        main: "Veld",
      },
      referee: {
        numberOfReferees: "Aantal Scheidsrechters",
        plural_counter_one: "{{count}} Scheidsrechter",
        plural_counter_other: "{{count}} Scheidsrechters",
      },
      comments: "Opmerkingen",
    },
    refereeRequest: {
      title: "Scheidsrechter aanvragen",
      paragraph1:
        "Wij werken van week tot week, elke maandag wordt gekeken naar de beschikbaarheid van onze scheidsrechters voor de komende zondag. Wanneer u een aanvraag doet voor of op maandag dan zullen wij u uiterlijk woensdag eind van de middag een update geven over de zoektocht naar de vervanging. Wanneer uw aanvraag in de loop van de week wordt gedaan zullen wij u binnen 2 dagen contacteren. Wanneer het een last minute aanvraag betreft, één of twee dagen voor de wedstrijd, dan komen wij dezelfde dag nog bij u terug. Mocht u geen bevestiging ontvangen dan hebben we geen scheidsrechters kunnen vinden. Het komt nog wel eens voor dat de bevestiging in spam beland, dus houd ook dit formulier goed in de gaten!",
      paragraph2:
        "Heeft u betaald en wij kunnen uw aanvraag niet honoreren dan nemen wij contact met u op. Wij kunnen 95% van de aanvragen in behandeling nemen. Heeft u betaald en geen bericht van ons ontvangen binnen de boven gestelde termijnen dan volgt de update zo snel mogelijk.",
      paragraph3:
        "Let wel op dat wij alleen in de week voordat de wedstrijd plaatsvindt naar uw aanvraag zullen kijken.",
      paragraph4:
        "Staat uw club niet bij de opties? Vul dan het formulier in bij '<quote_anchor>Offerte</quote_anchor>' en wij komen zo snel mogelijk bij u terug. Nog vragen? Kijk bij <faq_anchor>FAQ</faq_anchor> of neem contact met ons op.",
      paragraph5:
        "Na het invullen van het formulier krijgt u direct de mogelijkheid om via i-deal te betalen. Wanneer wij de betaling ontvangen hebben gaan wij aan de slag met uw aanvraag.",
    },
    refereeRequestSuccess: {
      test: "Scheidsrechterverzoek succesvol",
    },
  },
};

export default nl;
