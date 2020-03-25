module.exports = {
  greeting: 'Hello world!',
  home: {
    available: 'Now available',
    title: 'The first einfachIOTA magazine.',
    supporter: 'Supporter',
    supporter_text:
      'Thanks to our supporters, who had already ordered the einfachIOTA magazine in advance, we were able to make this project possible in the first place. Now the sale officially starts, be it with the first simplyIOTA magazine.',
    buy_now: 'Pre-order now',
    pay_with: {
      title: 'Payment methods:',
      text: 'IOTA, PayPal'
    },
    delivery: {
      title: 'Duration of delivery:',
      text: 'In April 2020'
    }
  },
  ei_description: 'IOTA simple and easy.',
  ei_mission:
    'Our mission is to provide content around IOTA and to explain IOTA in simple language.',
  footer: require('./modules/footer/en'),
  order: {
    form: {
      errors: {
        amount: 'Please enter how many exemplars you want.',
        number: 'Please enter a number.',
        number_zero: 'Come on, the number must be greater than 0 :-)'
      },
      first_name_label: 'First name',
      first_name_placeholder: 'Your First name',
      last_name_label: 'Last name',
      last_name_placeholder: 'Your Last name',
      address_label: 'Address',
      address_placeholder: 'Your address with house number',
      zip_code_label: 'Zip code',
      zip_code_placeholder: 'Your zip code',
      city_label: 'City',
      city_placeholder: 'Your city',
      country_label: 'Counry',
      country_placeholder: 'Choose your country',
      amount_label: 'Amount',
      email_label: 'Email',
      email_placeholder: 'Your email address',
      print_name_label: 'Print name (optional)',
      print_name_placeholder:
        'Your name, which will be printed into the magazine',
      newsletter_label: 'News via email',
      newsletter_placeholder: 'I want to receive news via mail.',
      submit: 'buy now'
    },
    costs: {
      title: 'Costs',
      amount: 'Amount',
      shipping: 'Shipping',
      sum: 'Sum'
    },
    payment: {
      title: 'How do you want to pay?',
      to_pay: 'To pay',
      pay_with_trinity: 'Pay here with Trinity',
      success: {
        title: 'Thanks for your support!',
        thanks: 'We wish you a nice day.',
        greetings: 'Your einfachIOTA Team.'
      }
    }
  },
  annotations: {
    mwst: 'All prices including taxes',
    confirm:
      'All prices include the legal VAT. By clicking BUY NOW you confirm the shopping cart and your entered data and agree to ours',
    data: 'Privacy Policy Page.',
    what_data: 'What happens with my data?',
    what_data_text:
      'We only use your data for a successful delivery and our accounting. The email address is required if we need to get in touch with you. We only do this if absolutely necessary. Unless you want to receive news from einfachIOTA, all you have to do is click the appropriate checkbox. You can find more information on data protection on our',
    what_data_link: 'Privacy Policy page.'
  },
  imprint: require('./modules/imprint_en'),
  privacy: require('./modules/privacy_en'),
  donations: require('./modules/donations/en')
}
