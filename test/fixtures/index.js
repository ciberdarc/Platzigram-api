export default {
  getImage () {
    return {
      id: '67e8a91f-c348-4575-8e8c-356c0c58564c',
      publicId: '3LBTou7pRI3kRGY9VeRsRv',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/3LBTou7pRI3kRGY9VeRsRv.jpg',
      description: '#awesome',
      tag: ['awesome'],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: '67e8a91f-c348-4575-8e8c-356c0c58564c',
      name: 'Alexis Araujo',
      username: 'ciberdarc',
      email: 'f@platzi.test',
      password: 'pl4tzi',
      createdAt: new Date().toString()
    }
  }
}
