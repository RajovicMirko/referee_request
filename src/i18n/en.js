const en = {
  messages: {
    error: {
      yup: {
        required: "This is required field",
        email: "This is not valid email",
      },
      api: {
        default: "Something went wrong",
        403: "Something went wrong",
        400: "Something is wrong, please check your data",
      },
    },
  },
  translation: {
    actions: {
      submit: "Submit",
    },
    global: {
      personalData: "Personal Data",
      matchData: "Match Data",
      price: {
        main: "Price",
        text: "{{sign}} {{netPrice}} excluding VAT. {{sign}} {{grossPrice}} including VAT.",
      },
    },
    field: {
      placeholder: {
        club: "Select Club",
        team: "Select Team",
        date: {
          selectDateTime: "Select Date And Time",
        },
      },
      name: {
        main: "Name",
        full: "Full Name",
      },
      email: {
        main: "Email",
      },
      phone: {
        main: "Phone number",
      },
      clubAndTeam: {
        your: "Your Club And Team",
        home: "Home Club And Team",
        away: "Away Club And Team",
      },
      date: {
        match: {
          start: "Match Start Time",
        },
      },
      field: {
        main: "Field",
      },
      referee: {
        numberOfReferees: "Number Of Referees",
        plural_counter_one: "{{count}} Referee",
        plural_counter_other: "{{count}} Referees",
      },
      comments: "Comments",
    },
    refereeRequest: {
      title: "Referee Request",
      paragraph1:
        "We work from week to week. Every Monday, we assess the availability of our referees for the upcoming Sunday. If you submit a request on or before Monday, we will provide you with an update on the search for a replacement by Wednesday afternoon. If your request is submitted during the week, we will contact you within 2 days. For last-minute requests, one or two days before the match, we will get back to you on the same day. If you don't receive a confirmation, it's possible that it might be in your spam folder, so please keep an eye on this form as well.",
      paragraph2:
        "If you have made a payment and we are unable to fulfill your request, we will get in touch with you. We are able to handle 95% of the requests. If you have paid and haven't received a message from us within the mentioned timeframes, an update will follow as soon as possible.",
      paragraph3:
        "Please note that we only review your request in the week before the match takes place.",
      paragraph4:
        "Is your club not listed among the options? Fill out the form under '<quote_anchor>Quote</quote_anchor>' and we will get back to you as soon as possible. More questions? Check the <faq_anchor>FAQ</faq_anchor> or get in touch with us.",
      paragraph5:
        "After filling out the form, you will immediately have the option to pay via iDeal. Once we receive the payment, we will start processing your request.",
    },
    refereeRequestSuccess: {
      test: "Referee request successful",
    },
  },
};

export default en;
