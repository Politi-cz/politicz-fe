import { IPoliticalParty, IPoliticalPartyState } from '../app/data/schema/political-party';

export const PoliticalPartyStateDefaultMock: IPoliticalPartyState = {
  selectedParty: {} as IPoliticalParty,
  parties: [
    {
      imageUrl: 'https://seeklogo.com/images/P/Praha-logo-D9CC980EDF-seeklogo.com.png',
      name: 'Sdružení za Prahu',
      id: '1',
      tags: ['Praha', 'Praha sobě', 'Demokracie'],
      politicians: [
        {
          id: '1',
          birthDate: new Date('1975'),
          fullName: 'Ainsley Barker',
          imageUrl:
            'https://media.istockphoto.com/id/130406986/photo/politician-talking-into-reporters-microphones.jpg?s=612x612&w=0&k=20&c=GannV-2IpbC4GytvGqAwzMbalZpgfX68p9pXhAmIUeY=',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
        {
          id: '2',
          birthDate: new Date('1980'),
          fullName: 'Nelson Arias',
          imageUrl:
            'https://t3.ftcdn.net/jpg/03/97/62/82/360_F_397628238_3wyXr5j5OjLMwr4FOX2d2u4dCRZS2pxw.jpg',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
        {
          id: '3',
          birthDate: new Date('1982'),
          fullName: 'Scarlett Klein',
          imageUrl:
            'https://st.depositphotos.com/1034300/1363/i/600/depositphotos_13632170-stock-photo-business-meeting-conference-journalism-microphones.jpg',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
        {
          id: '4',
          birthDate: new Date('1955'),
          fullName: 'Madden Pittman',
          imageUrl:
            'https://media.istockphoto.com/id/483735704/photo/studio-portrait-of-untrustworthy-politician.jpg?s=612x612&w=0&k=20&c=dCXgIW-Lq8AGAiD6bGerhCF_nvnO5UzyJhd3rUKQkmU=',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
      ],
    },
    {
      imageUrl:
        'https://e7.pngegg.com/pngimages/31/978/png-clipart-peace-sign-logo-angellist-peace-logo-icons-logos-emojis-tech-companies-thumbnail.png',
      name: 'OWF',
      id: '2',
      tags: ['Peace', 'Human rights', 'Whatever'],
      politicians: [
        {
          id: '1',
          birthDate: new Date('1975'),
          fullName: 'Josef Baker',
          imageUrl:
            'https://i.insider.com/5f4e9aa87ed0ee001e25cc9f?width=1000&format=jpeg&auto=webp',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
        {
          id: '2',
          birthDate: new Date('1980'),
          fullName: 'Andrej Ari',
          imageUrl:
            'https://caltech-prod.s3.amazonaws.com/main/images/RAdolphs-Corruption-NEWS-WEB.original.jpg',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
        {
          id: '3',
          birthDate: new Date('1982'),
          fullName: 'Scarlett Hemmer',
          imageUrl:
            'https://media.newyorker.com/photos/5909740b8b51cf59fc422d49/master/w_3000,h_2064,c_limit/cassidy-trump-politician.jpg',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
        {
          id: '4',
          birthDate: new Date('1955'),
          fullName: 'Madden Dog',
          imageUrl:
            'https://static01.nyt.com/images/2019/09/26/arts/26politician-1/26politician-1-superJumbo-v2.jpg',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
        {
          id: '5',
          birthDate: new Date('1955'),
          fullName: 'John Brown',
          imageUrl:
            'https://thumbs.dreamstime.com/b/politician-tribune-performance-character-businessman-cartoon-design-vector-illustration-politician-tribune-performance-businessman-112748650.jpg',
          facebookUrl: 'https://facebook.com',
          instagramUrl: 'https://instagram.com',
          twitterUrl: 'https://twitter.com',
        },
      ],
    },
  ],
};
