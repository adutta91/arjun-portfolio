export const items = [
  {
    title : 'React Test Wrapper',
    description : `
        A wrapper component which one can use to test react components, making sure they function well in a vacuum before using them elsewhere. The wrapper would contain useful functionalities like controlling proptypes or running through unit tests. I created something along these lines for use in my current workplace, but the tool has a lot of room for improvement. When I have the time I would like to factor this out into its own npm module.
    `,
    skills : [
        'ReactJS',
        'JavaScript',
        'NPM',
        'HTML/CSS'
    ]
  },
  {
    title : 'Breadcrumbs',
    description : `
        An iOS app that I want to build for two reasons: 1) dive into mobile development and React Native, and 2) to fill a niche use case that I have found otherwise devoid of apps. The idea is that this app will send out 'Breadcrumbs' to chosen friends/family of where you are while you're travelling, such that they don't have to worry about you. The interval of breadcrumbs can be chosen, and trips can perhaps be mapped and saved. I found something like this would have been useful during the many long road trips I've done in which I have otherwise been manually sending out Status 200's to my family. I imagine there will be many seen and unforeseen challenges, but am really excited to start this project when I am able!
    `,
    skills : [
        'React Native',
        'JavaScript',
        'NodeJS',
        'SQL or NoSQL (TBD)',
    ]
  },
  {
    title : 'Raspberry Remote',
    description : `
        This is a little bit of a deviation from my normal projects, but it is something I am really interested in and curious about. The idea is a universal remote that I can control through a web app, and eventually through Amazon Alexa. The remote would have the ability to control several devices in my living room that I currently have to turn on manually and individually: my projector, the projector screen, the speaker system, and the lights. I plan to use a Raspberry Pi with an IR sensor to replicate each of my individual remote's signals when prompted through an API endpoint. Additionally, the lights can be controlled through the Phillips Hue API. Lastly, the cherry on top would be to fire these events through custom Alexa Skills. Definitely a big project, but I will have a lot of fun figuring it all out!
    `,
    skills : [
        'Raspberry Pi',
        'NodeJS',
        'ReactJS',
        'Javascript',
        'Alexa Skills',
        'RESTful Web Services',
    ]
  },
];