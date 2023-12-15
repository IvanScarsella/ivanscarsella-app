// link: Enlace para ver el video en Youtube, es el que se usa para buscar en el navegador
// src: la data que recibe el componente MusicCard, se extrae desde el botón "insertar" en el video

// export const coverVideos = [
//   {
//     data: {
//       artist: 'La Mono',
//       song: 'La Clase Santa',
//       genre: 'Grunge, Rock Progresivo',
//       link: 'https://www.youtube.com/watch?v=VNd_GyjUj1M&t=1s&ab_channel=Iv%C3%A1nScarsella',
//     },
//     src: 'https://www.youtube.com/embed/VNd_GyjUj1M?si=4CpF1h71TUUAgN3z',
//   },
//   {
//     data: {
//       artist: 'Barro',
//       song: 'Tik Tok',
//       genre: 'Nu Metal, Djent',
//       link: 'https://www.youtube.com/watch?v=RXy6ynk6HTY&ab_channel=Iv%C3%A1nScarsella',
//     },
//     src: 'https://www.youtube.com/embed/RXy6ynk6HTY?si=qx19ZT8Pwd9MxKvF',
//   },
//   {
//     data: {
//       artist: 'Nathy Peluso',
//       song: 'Celebré',
//       genre: 'Hip hop, Trap',
//       link: 'https://www.youtube.com/watch?v=1gQmGAd1Y0Y&ab_channel=Iv%C3%A1nScarsella',
//     },
//     src: 'https://www.youtube.com/embed/1gQmGAd1Y0Y?si=tZXEURN-Dn-8tbpk',
//   },
//   {
//     data: {
//       artist: 'Barro',
//       song: 'Fornai',
//       genre: 'Nu Metal, Djent',
//       link: 'https://www.youtube.com/watch?v=G3j3v1n1gmo&ab_channel=Iv%C3%A1nScarsella',
//     },
//     src: 'https://www.youtube.com/embed/G3j3v1n1gmo?si=De89lQHIQ7B8YmVF',
//   },
//   {
//     data: {
//       artist: 'Persefone',
//       song: 'Mind As Universe',
//       genre: 'Death Metal Progresivo',
//       link: 'https://www.youtube.com/watch?v=W18ibGDa4Ew&t=80s&ab_channel=Iv%C3%A1nScarsella',
//     },
//     src: 'https://www.youtube.com/embed/W18ibGDa4Ew?si=5J2qlB_uEA5VSMOW',
//   },
//   {
//     data: {
//       artist: 'Eruca Sativa',
//       song: 'Nada Salvaje',
//       genre: 'Rock',
//       link: 'https://www.youtube.com/watch?v=umGlAbWeuDw&ab_channel=Iv%C3%A1nScarsella',
//     },
//     src: 'https://www.youtube.com/embed/umGlAbWeuDw?si=9cwhazPLw7r2BZLY',
//   },
// ]

// export const originalVideos = [
//   {
//     data: {
//       artist: 'F20',
//       song: 'Daño Colateral',
//       genre: 'Metal Progresivo',
//       link: 'https://www.youtube.com/watch?v=5egJ4yKepHU&ab_channel=F20',
//     },
//     src: 'https://www.youtube.com/embed/5egJ4yKepHU?si=FGg7Qc5INcQheNGt',
//   },
//   {
//     data: {
//       artist: 'M28',
//       song: 'Domador',
//       genre: 'Groove Metal, Djent',
//       link: 'https://www.youtube.com/watch?v=l9OAcKClXog&ab_channel=M28metal',
//     },
//     src: 'https://www.youtube.com/embed/l9OAcKClXog?si=K_RqYdjwiGMdmiBS',
//   },
//   {
//     data: {
//       artist: 'M28',
//       song: 'Laberinto',
//       genre: 'Groove Metal, Djent',
//       link: 'https://www.youtube.com/watch?v=NYanwDucIfU&ab_channel=M28metal',
//     },
//     src: 'https://www.youtube.com/embed/NYanwDucIfU?si=KYp1Aib-dFog-rSS',
//   },
//   {
//     data: {
//       artist: 'M28',
//       song: 'Laureles',
//       genre: 'Groove Metal, Djent',
//       link: 'https://www.youtube.com/watch?v=AoL3WiqHMCM&ab_channel=M28metal',
//     },
//     src: 'https://www.youtube.com/embed/AoL3WiqHMCM?si=IimiCpnlHFgYFti3',
//   },
//   {
//     data: {
//       artist: 'Kali Yuga',
//       song: 'Pangea',
//       genre: 'Heavy Metal',
//       link: 'https://www.youtube.com/watch?v=PZePegj6HcQ&ab_channel=KaliYuga',
//     },
//     src: 'https://www.youtube.com/embed/PZePegj6HcQ?si=_4vBOsCZ3tvktEXV',
//   },
// ]

// musicConstants.js
const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000' // URL local para desarrollo
    // : 'https://ivanscarsella.com'
    : 'https://www.ivanscarsella.com.ar/'

export const fetchVideos = async (sectionName: string) => {
  const response = await fetch(`${apiUrl}/${sectionName}`)
  const data = await response.json()
  return data
}
export const fetchProjects = async () => {
  const response = await fetch(`${apiUrl}/programmingProjects`)
  const data = await response.json()
  return data
}

// export const fetchOriginalVideos = async () => {
//   const response = await fetch('http://localhost:4000/originalVideos');
//   const data = await response.json();
//   return data;
// };
