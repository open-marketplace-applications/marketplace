module.exports = {
  greeting: 'Hallo Welt!',
  home: {
    available: 'Vorverkauf',
    title: 'Das erste einfachIOTA Magazin in Englisch.',
    supporter: 'Unterstützer',
    supporter_text:
      'Dank unseren Unterstützern, die bereits im Vorverkauf das einfachIOTA Magazin bestellt haben, konnten wir dieses Projekt überhaupt erst möglich machen. Jetzt startet offiziell der Verkauf, sei dabei beim ersten einfachIOTA Magazin.',
    buy_now: 'Pre-order now',
    pay_with: {
      title: 'Payment methods:',
      text: 'IOTA, PayPal'
    },
    delivery: {
      title: 'Delivery time:',
      text: 'April 2020'
    }
  },
  ei_description: 'IOTA einfach erklärt.',
  ei_mission:
    'Unsere Aufgabe ist es, deutschsprachigen Inhalt rund um IOTA bereitzustellen und IOTA in einfacher Sprache zu erklären.',
  footer: require('./modules/footer/de'),
  order: {
    form: {
      errors: {
        amount: 'Bitte gib an, wie viel Exemplare du möchtest.',
        number: 'Bitte gibt eine Zahl ein.',
        number_zero: 'Komm schon, die Zahl muss größer als 0 sein :-)'
      },
      first_name_label: 'Vorname',
      first_name_placeholder: 'Dein Vorname',
      last_name_label: 'Nachname',
      last_name_placeholder: 'Dein Nachname',
      address_label: 'Adresse',
      address_placeholder: 'Deine Adresse und Hausnummer',
      zip_code_label: 'Postleitzahl',
      zip_code_placeholder: 'Deine Postleitzahl',
      city_label: 'Stadt',
      city_placeholder: 'Deine Stadt',
      country_label: 'Land',
      country_placeholder: 'Wähle dein Land',
      amount_label: 'Menge der Magazine',
      email_label: 'E-Mail',
      email_placeholder:
        'Deine E-Mail Adresse, falls bei der Lieferung etwas schief geht.',
      print_name_label: 'Name für den Druck (optional)',
      print_name_placeholder: 'Dein Name, der ins Magazin gedruckt werden soll',
      newsletter_label: 'Neuigkeiten per E-Mail',
      newsletter_placeholder: 'Ich möchte Neuigkeiten erhalten.',
      submit: 'Jetzt kaufen'
    },
    costs: {
      title: 'Kosten',
      amount: 'Menge',
      shipping: 'Lieferung',
      sum: 'Summe'
    },
    payment: {
      title: 'Wie willst du bezahlen?',
      to_pay: 'Zu zahlen',
      pay_with_trinity: 'Zahle hier mit Trinity',
      success: {
        title: 'Danke für deinen Support!',
        thanks: 'Wir wünschen dir noch einen schönen Tag.',
        greetings: 'Dein einfachIOTA Team.'
      }
    }
  },
  annotations: {
    mwst: 'Alle Preise verstehen sich inklusive der gesetzlichen MwSt.',
    confirm:
      ' Alle Preise verstehen sich inklusive der gesetzlichen MwSt. Durch Anklicken von JETZT KAUFEN bestätigst Du den Warenkorb, sowie Deine eingegebenen Daten und stimmst unseren ',
    data: 'Datenschutzbestimmungen zu.',
    what_data: 'Was passiert mit meinen Daten?',
    what_data_text:
      'Wir verwenden deine Daten nur für eine erfolgreiche Zusendung und unsere Buchhaltung. Die Email Adresse wird benötigt, falls wir mit dir in Kontakt treten müssen. Dies tun wir aber nur, wenn es unbedingt nötig ist. Ausser du möchtest Neuigkeiten von einfachIOTA erhalten, dafür musst du nur die dazu passende Checkbox anklicken. Mehr Informationen zum Datenschutz findest du auf unserer',
    what_data_link: 'Datenschutzerklärungs Seite.'
  },
  imprint: require('./modules/imprint_de'),
  privacy: require('./modules/privacy_de'),
  donations: require('./modules/donations/de')
}
