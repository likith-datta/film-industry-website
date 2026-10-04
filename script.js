/**
 * CineVerse - Film Industries & Top 10 Actors Interactive Loop Showcase
 */

// Dataset containing 6 global film industries, each with exactly 10 actors
const filmIndustries = [
  {
    "id": "tollywood",
    "name": "Tollywood",
    "language": "Telugu Cinema",
    "origin": "India (Andhra Pradesh & Telangana)",
    "description": "Known for epic high-budget pan-Indian spectacle cinema, massive emotional storytelling, and larger-than-life hero personas.",
    "actors": [
      {
        "id": "prabhas",
        "name": "Prabhas",
        "title": "Rebel Star",
        "movies": [
          "Baahubali",
          "Salaar",
          "Kalki 2898 AD",
          "Mirchi"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Prabhas_by_Gage_Skidmore.jpg/330px-Prabhas_by_Gage_Skidmore.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Uppalapati Venkata Suryanarayana Prabhas Raju , known mononymously as Prabhas, is an Indian actor who predominantly works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has been featured in Forbes India's Celebrity 100 list since 2015.",
        "description": "Indian actor (born 1979)"
      },
      {
        "id": "mahesh_babu",
        "name": "Mahesh Babu",
        "title": "Superstar / Prince",
        "movies": [
          "Pokiri",
          "Srimanthudu",
          "Dookudu",
          "Guntur Kaaram"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Mahesh_Babu_in_Spyder_%28cropped%29.jpg/330px-Mahesh_Babu_in_Spyder_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Ghattamaneni Mahesh Babu is an Indian actor, producer and philanthropist, voice actor, who works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has been featured in Forbes India's Celebrity 100 list from 2012 to 2025.",
        "description": "Indian actor and film producer (b. 1975)"
      },
      {
        "id": "allu_arjun",
        "name": "Allu Arjun",
        "title": "Icon Star",
        "movies": [
          "Pushpa: The Rise",
          "Pushpa 2",
          "Ala Vaikunthapurramuloo",
          "Arya"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg/330px-Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Allu Arjun is an Indian actor who works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has been featured in Forbes India's Celebrity 100 list since 2014.",
        "description": "Indian actor (born 1982)"
      },
      {
        "id": "n__t__rama_rao_jr_",
        "name": "Jr. NTR",
        "title": "Man of Masses / Young Tiger",
        "movies": [
          "RRR",
          "Devara",
          "Janatha Garage",
          "Aravinda Sametha"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/NTR_Jr._%282026%29.jpg/330px-NTR_Jr._%282026%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Nandamuri Taraka Rama Rao Jr., popularly known as NTR Jr, is an Indian actor, and television presenter who primarily works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has been featured in Forbes India's Celebrity 100 list since 2012.",
        "description": "Indian actor (born 1983)"
      },
      {
        "id": "ram_charan",
        "name": "Ram Charan",
        "title": "Mega Power Star",
        "movies": [
          "RRR",
          "Rangasthalam",
          "Magadheera",
          "Game Changer"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Ram_Charan_at_Game_Changer_trailer_launch.jpg/330px-Ram_Charan_at_Game_Changer_trailer_launch.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Konidela Ram Charan is an Indian actor, film producer, and entrepreneur who primarily works in Telugu films. He is one of the highest-paid actors in Telugu cinema and is also known for his dancing.",
        "description": "Indian actor and film producer (b. 1985)"
      },
      {
        "id": "chiranjeevi",
        "name": "Chiranjeevi",
        "title": "Megastar",
        "movies": [
          "Khaidi",
          "Indra",
          "Sye Raa Narasimha Reddy",
          "Waltair Veerayya"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Chiranjeevi_at_ANR_Awards_2024_%28cropped%29.jpg/330px-Chiranjeevi_at_ANR_Awards_2024_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Konidela Chiranjeevi is an Indian actor, philanthropist and former politician known for his work in Telugu cinema. Known as Mega Star, he is widely regarded as one of the most successful and influential actors in the history of Indian cinema.",
        "description": "Indian actor and philanthropist (born 1955)"
      },
      {
        "id": "pawan_kalyan",
        "name": "Pawan Kalyan",
        "title": "Power Star",
        "movies": [
          "Gabbar Singh",
          "Attarintiki Daredi",
          "Kushi",
          "Vakeel Saab"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shri_Konidela_Pawan_Kalyan.jpg/330px-Shri_Konidela_Pawan_Kalyan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Konidela Pawan Kalyan is an Indian politician, actor, philanthropist, and martial artist serving as the 11th Deputy Chief Minister of Andhra Pradesh since June 2024. He also serves as the Minister of Panchayat Raj, Rural Development and Rural Water Supply; Environment, Forest, Science and Technology in the Government of Andhra Pradesh as MLA representing the Pithapuram constituency.",
        "description": "Indian politician and actor (born 1971)"
      },
      {
        "id": "nani__actor_",
        "name": "Nani",
        "title": "Natural Star",
        "movies": [
          "Jersey",
          "Dasara",
          "Eega",
          "Hi Nanna"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png/330px-Nani_at_an_interview_for_film_companion_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Ghanta Naveen Babu, known professionally as Nani, is an Indian actor and producer who predominantly works in Telugu cinema. He is one of the highest-paid and most popular Indian actors.",
        "description": "Indian actor and film producer (born 1984)"
      },
      {
        "id": "vijay_deverakonda",
        "name": "Vijay Deverakonda",
        "title": "Rowdy Star",
        "movies": [
          "Arjun Reddy",
          "Geetha Govindam",
          "Dear Comrade",
          "Kushi"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Vijay_Devarakonda_snapped_during_Liger_promotions.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        "extract": "Deverakonda Vijay Sai, widely known as Vijay Deverakonda, is an Indian actor and film producer who works in Telugu films. Deverakonda is the recipient of a Filmfare Award, a Nandi Award and three SIIMA Awards..",
        "description": "Indian actor and film producer (born 1989)"
      },
      {
        "id": "nagarjuna__actor_",
        "name": "Akkineni Nagarjuna",
        "title": "King Nagarjuna",
        "movies": [
          "Shiva",
          "Geethanjali",
          "Annamayya",
          "Oopiri"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Nagarjuna_Akkineni_at_ANR_Awards.jpg/330px-Nagarjuna_Akkineni_at_ANR_Awards.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Akkineni Nagarjuna is an Indian actor best known for his works primarily in Telugu cinema, as well as in a few Hindi and Tamil films. He has appeared in over 90 films and is a recipient of two National Film Awards for Ninne Pelladata (1996) and Annamayya (1997).",
        "description": "Indian actor and film producer (born 1959)"
      }
    ],
    "icon": "🌟",
    "badge": "Telugu Cinema",
    "accentColor": "#f59e0b",
    "gradient": "linear-gradient(135deg, #d97706, #b45309)",
    "bgGlow": "rgba(245, 158, 11, 0.15)"
  },
  {
    "id": "bollywood",
    "name": "Bollywood",
    "language": "Hindi Cinema",
    "origin": "India (Mumbai)",
    "description": "The world-famous Hindi cinema industry, renowned for grand musicals, romance, action spectacles, and global cultural impact.",
    "actors": [
      {
        "id": "shah_rukh_khan",
        "name": "Shah Rukh Khan",
        "title": "King Khan / Badshah",
        "movies": [
          "DDLJ",
          "Jawan",
          "Pathaan",
          "Chak De! India"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/330px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Shah Rukh Khan, popularly known by the initials SRK, is an Indian actor and film producer renowned for his work in Hindi cinema. Referred to in the media as the \"Baadshah of Bollywood\" and \"King Khan\", he has appeared in more than 90 films and earned numerous accolades, including a National Film Award and 15 Filmfare Awards.",
        "description": "Indian actor (born 1965)"
      },
      {
        "id": "salman_khan",
        "name": "Salman Khan",
        "title": "Bhaijaan",
        "movies": [
          "Bajrangi Bhaijaan",
          "Sultan",
          "Tiger 3",
          "Dabangg"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Salman_Khan_in_2023_%28cropped%29.jpg/330px-Salman_Khan_in_2023_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Salman Khan is an Indian actor, film producer, and television personality who works primarily in Hindi cinema. In a career spanning over three decades, his awards include two National Film Awards as a film producer, and two Filmfare Awards as an actor.",
        "description": "Indian actor and film producer (born 1965)"
      },
      {
        "id": "aamir_khan",
        "name": "Aamir Khan",
        "title": "Mr. Perfectionist",
        "movies": [
          "Dangal",
          "3 Idiots",
          "Lagaan",
          "Taare Zameen Par"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Aamir_Khan_at_the_success_bash_of_Secret_Superstar.jpg/330px-Aamir_Khan_at_the_success_bash_of_Secret_Superstar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Aamir Hussain Khan is an Indian actor, filmmaker, and television personality who works in Hindi films. Referred to as \"Mr.",
        "description": "Indian actor and filmmaker (born 1965)"
      },
      {
        "id": "amitabh_bachchan",
        "name": "Amitabh Bachchan",
        "title": "Shahenshah / Big B",
        "movies": [
          "Sholay",
          "Deewaar",
          "Piku",
          "Kalki 2898 AD"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Indian_actor_Amitabh_Bachchan.jpg/330px-Indian_actor_Amitabh_Bachchan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Amitabh Bachchan is an Indian actor, playback singer, and producer who primarily works in Hindi cinema. Widely considered one of the greatest, most accomplished and commercially successful actors in the history of Indian cinema, he has starred in over 200 films.",
        "description": "Indian actor (born 1942)"
      },
      {
        "id": "hrithik_roshan",
        "name": "Hrithik Roshan",
        "title": "Greek God of Bollywood",
        "movies": [
          "Krrish",
          "War",
          "Fighter",
          "Dhoom 2"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/330px-Hrithik_at_Rado_launch.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Hritik Rakesh Nagrath, known professionally as Hrithik Roshan, is an Indian actor and producer who works in Hindi cinema. Referred to as the millennial superstar, he has portrayed a variety of characters and is known for his dancing skills.",
        "description": "Indian actor and film producer (born 1974)"
      },
      {
        "id": "ranbir_kapoor",
        "name": "Ranbir Kapoor",
        "title": "Rockstar",
        "movies": [
          "Animal",
          "Sanju",
          "Barfi!",
          "Rockstar"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Ranbir_Kapoor_at_Ramayana_special_event_in_Sep_26_%28cropped%29.jpg/330px-Ranbir_Kapoor_at_Ramayana_special_event_in_Sep_26_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Ranbir Raj Kapoor is an Indian actor who works in Hindi-language films. He has received several accolades, including seven Filmfare Awards, and is known for his work across a range of film genres.",
        "description": "Indian actor (born 1982)"
      },
      {
        "id": "ranveer_singh",
        "name": "Ranveer Singh",
        "title": "Powerhouse",
        "movies": [
          "Bajirao Mastani",
          "Padmaavat",
          "Gully Boy",
          "83"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/32/Ranveer_Singh_in_2023_%281%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        "extract": "Ranveer Singh Bhavnani is an Indian actor who predominantly works in Hindi films. Known for his work in a variety of genres, he has received several accolades, including five Filmfare Awards.",
        "description": "Indian actor (born 1985)"
      },
      {
        "id": "akshay_kumar",
        "name": "Akshay Kumar",
        "title": "Khiladi",
        "movies": [
          "Hera Pheri",
          "Baby",
          "Rustom",
          "Special 26"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Akshay_Kumar_National_Award_for_Padman_%28cropped%29.jpg/330px-Akshay_Kumar_National_Award_for_Padman_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Akshay Hari Om Bhatia, known professionally as Akshay Kumar, is an Indian actor and film producer working in Hindi cinema. Referred to in the media as \"Khiladi Kumar\", he is the recipient of several accolades, including two National Film Awards and two Filmfare Awards.",
        "description": "Indian actor and film producer (born 1967)"
      },
      {
        "id": "ajay_devgn",
        "name": "Ajay Devgn",
        "title": "Singham",
        "movies": [
          "Drishyam",
          "Tanhaji",
          "Singham",
          "Golmaal"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Ajay_Devgn_at_the_trailer_launch_of_Raid_2.jpg/330px-Ajay_Devgn_at_the_trailer_launch_of_Raid_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Vishal Virender \"Ajay\" Devgan is an Indian actor, film director and producer who mainly works in Hindi films. He has appeared in over 100 films and has won numerous accolades, including four National Film Awards and four Filmfare Awards.",
        "description": "Indian actor and filmmaker (born 1969)"
      },
      {
        "id": "shahid_kapoor",
        "name": "Shahid Kapoor",
        "title": "Dynamic Star",
        "movies": [
          "Kabir Singh",
          "Jab We Met",
          "Haider",
          "Farzi"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Shahid_Kapoor_at_Bloody_Daddy_launch_%28cropped%29.jpg/330px-Shahid_Kapoor_at_Bloody_Daddy_launch_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Shahid Pankaj Kapoor is an Indian actor who works in Hindi films. Initially recognised for portraying romantic roles, he has since taken on parts in action films and thrillers.",
        "description": "Indian actor (born 1981)"
      }
    ],
    "icon": "🎬",
    "badge": "Hindi Cinema",
    "accentColor": "#ef4444",
    "gradient": "linear-gradient(135deg, #e11d48, #be123c)",
    "bgGlow": "rgba(239, 68, 68, 0.15)"
  },
  {
    "id": "kollywood",
    "name": "Kollywood",
    "language": "Tamil Cinema",
    "origin": "India (Tamil Nadu / Chennai)",
    "description": "Celebrated for grounded realism, technical brilliance, energetic music, and legendary superstars.",
    "actors": [
      {
        "id": "rajinikanth",
        "name": "Rajinikanth",
        "title": "Superstar / Thalaivar",
        "movies": [
          "Baashha",
          "Jailer",
          "Enthiran",
          "Sivaji"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Rajinikanth_in_2019.jpg/330px-Rajinikanth_in_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Shivaji Rao Gaikwad, known professionally as Rajinikanth, is an Indian actor who predominantly works in Tamil cinema. In a career spanning over five decades, he has done 170 films that includes films in Tamil, Hindi, Telugu, Kannada, Bangla, and Malayalam.",
        "description": "Indian actor (born 1950)"
      },
      {
        "id": "kamal_haasan",
        "name": "Kamal Haasan",
        "title": "Ulaganayagan",
        "movies": [
          "Vikram",
          "Nayakan",
          "Indian",
          "Dasavathaaram"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Kamal_Haasan_at_2023_San_Diego_Comic-Con_International_by_Gage_Skidmore%2C_005_%28cropped%29.jpg/330px-Kamal_Haasan_at_2023_San_Diego_Comic-Con_International_by_Gage_Skidmore%2C_005_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Kamal Haasan is an Indian actor, filmmaker and politician, currently serving as a Member of Parliament, Rajya Sabha for Tamil Nadu. He is an actor, director, producer, screenwriter, playback singer and lyricist who works primarily in Tamil cinema.",
        "description": "Indian actor, filmmaker, and politician (born 1954)"
      },
      {
        "id": "vijay__actor_",
        "name": "Thalapathy Vijay",
        "title": "Thalapathy",
        "movies": [
          "Leo",
          "Mersal",
          "Master",
          "Ghilli"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/C._Joseph_Vijay_%28cropped%29.jpg/330px-C._Joseph_Vijay_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Chandrasekaran Joseph Vijay is an Indian politician and former actor who is currently serving as the ninth chief minister of Tamil Nadu since May 2026. He is the founder and president of the political party Tamilaga Vettri Kazhagam (TVK).",
        "description": "Chief Minister of Tamil Nadu since 2026"
      },
      {
        "id": "ajith_kumar",
        "name": "Ajith Kumar",
        "title": "AK / Thala",
        "movies": [
          "Mankatha",
          "Viswasam",
          "Billa",
          "Thunivu"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Shri_Ajith_Kumar_at_Rashtrapati_Bhavan_Cropped.jpg/330px-Shri_Ajith_Kumar_at_Rashtrapati_Bhavan_Cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Ajith Kumar Subramaniam is an Indian actor who works predominantly in Tamil cinema. To date, he has starred in over 63 films, and won four Vijay Awards, three Cinema Express Awards, three Filmfare Awards South and three Tamil Nadu State Film Awards.",
        "description": "Indian actor and racing driver (born 1971)"
      },
      {
        "id": "suriya",
        "name": "Suriya",
        "title": "Nadippin Nayagan",
        "movies": [
          "Soorarai Pottru",
          "Jai Bhim",
          "Ghajini",
          "Singam"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Retro_audio_launch_-_Suriya.jpg/330px-Retro_audio_launch_-_Suriya.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Saravanan Sivakumar, known professionally as Suriya, is an Indian actor and film producer who primarily works in Tamil cinema. One of the highest-paid Tamil film actors, Suriya is considered as one of the finest actors of Indian cinema.",
        "description": "Indian actor and film producer (born 1975)"
      },
      {
        "id": "vikram__actor_",
        "name": "Vikram",
        "title": "Chiyaan",
        "movies": [
          "Anniyan",
          "Ponniyin Selvan",
          "I",
          "Pithamagan"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Vikram_at_the_%E2%80%98Kadaram_Kondan%E2%80%99_Press_Meet.jpg/330px-Vikram_at_the_%E2%80%98Kadaram_Kondan%E2%80%99_Press_Meet.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Kennedy John Victor, known professionally as Vikram, is an Indian actor and playback singer who predominantly works in Tamil cinema. One of the highest paid actors, he is also among the most decorated actors in Indian cinema, with laurels including nine Filmfare Awards South, a National Film Award, four Tamil Nadu State Film Awards and the Kalaimamani Award from the Government of Tamil Nadu.",
        "description": "Indian actor and playback singer (born 1966)"
      },
      {
        "id": "dhanush",
        "name": "Dhanush",
        "title": "National Award Winner",
        "movies": [
          "Asuran",
          "Aadukalam",
          "Vada Chennai",
          "Raanjhanaa"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Dhanush_at_the_%E2%80%98Asuran%E2%80%99_Success_Meet_%28cropped%29.jpg/330px-Dhanush_at_the_%E2%80%98Asuran%E2%80%99_Success_Meet_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Venkatesh Prabhu Kasthuri Raja, known professionally as Dhanush, is an Indian actor, filmmaker, lyricist and playback singer who works primarily in Tamil films, as well as few Hindi and Telugu films. Having starred in 50 films over his career, his accolades include six National Film Awards, two Tamil Nadu State Film Awards, fourteen SIIMA Awards, eight Filmfare Awards South and a Filmfare Award.",
        "description": "Indian actor and filmmaker (born 1983)"
      },
      {
        "id": "sivakarthikeyan",
        "name": "Sivakarthikeyan",
        "title": "Prince",
        "movies": [
          "Doctor",
          "Don",
          "Maaveeran",
          "Amaran"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Sivakarthikeyan_%28cropped%29.jpg/330px-Sivakarthikeyan_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Sivakarthikeyan, also known by his initials as SK, is an Indian actor, playback singer, lyricist, and film producer primarily active in Tamil cinema. He served as a television presenter before his entry into films.",
        "description": "Indian actor and musician (born 1985)"
      },
      {
        "id": "vijay_sethupathi",
        "name": "Vijay Sethupathi",
        "title": "Makkal Selvan",
        "movies": [
          "Super Deluxe",
          "Vikram Vedha",
          "Master",
          "96"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Vijay_Sethupathi_at_the_premiere_of_Merry_Christmas_2_%28cropped%29.jpg/330px-Vijay_Sethupathi_at_the_premiere_of_Merry_Christmas_2_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Vijaya Gurunatha Sethupathi Kalimuthu, known professionally as Vijay Sethupathi, is an Indian actor and film producer who predominantly works in Tamil films and occasionally in Telugu and Hindi films. One of the highest paid actors in Indian Cinema, Sethupathi is the recipient of several accolades, including a National Film Award, two Filmfare Awards South and two Tamil Nadu State Film Awards..",
        "description": "Indian actor and film producer (born 1978)"
      },
      {
        "id": "karthi__actor_",
        "name": "Karthi",
        "title": "Versatile Performer",
        "movies": [
          "Kaithi",
          "Ponniyin Selvan",
          "Paruthiveeran",
          "Theeran"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Karthi_at_the_Kadaikutty_Singam_Success_Meet.jpg/330px-Karthi_at_the_Kadaikutty_Singam_Success_Meet.jpg",
        "extract": "Karthik Sivakumar, known mononymously as Karthi, is an Indian actor who predominantly works in Tamil cinema. He is known for acclaimed hits like Paruthiveeran, Kaithi, and Ponniyin Selvan.",
        "born": "",
        "description": "Indian actor (born 1977)"
      }
    ],
    "icon": "🎭",
    "badge": "Tamil Cinema",
    "accentColor": "#3b82f6",
    "gradient": "linear-gradient(135deg, #2563eb, #1d4ed8)",
    "bgGlow": "rgba(59, 130, 246, 0.15)"
  },
  {
    "id": "mollywood",
    "name": "Mollywood",
    "language": "Malayalam Cinema",
    "origin": "India (Kerala)",
    "description": "Globally acclaimed for rich content, realistic performances, subtle screenwriting, and cinematic purity.",
    "actors": [
      {
        "id": "mohanlal",
        "name": "Mohanlal",
        "title": "The Complete Actor / Lalettan",
        "movies": [
          "Drishyam",
          "Lucifer",
          "Vanaprastham",
          "Spadikam"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Mohanlal_Viswanathan_BNC.jpg/330px-Mohanlal_Viswanathan_BNC.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Mohanlal Viswanathan, known mononymously as Mohanlal, is an Indian actor, producer, and playback singer who predominantly works in Malayalam cinema and has also occasionally appeared in Tamil, Hindi, Telugu and Kannada films. Mohanlal has a prolific career spanning over four decades, during which he has acted in more than 400 films.",
        "description": "Indian actor, producer, and playback singer (born 1960)"
      },
      {
        "id": "mammootty",
        "name": "Mammootty",
        "title": "Megastar / Mammookka",
        "movies": [
          "Bramayugam",
          "Kannur Squad",
          "Dr. Babasaheb Ambedkar",
          "Kaathal"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Mammootty%2C_2022.jpg/330px-Mammootty%2C_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Muhammad Kutty Panaparambil Ismail, known professionally as Mammootty, is an Indian actor and film producer who works predominantly in Malayalam-language films. With a career spanning over five decades, he has appeared in over 400 films, predominantly in lead roles, across Malayalam, Tamil, Telugu, Kannada, Hindi, and English languages.",
        "description": "Indian actor and film producer (born 1951)"
      },
      {
        "id": "dulquer_salmaan",
        "name": "Dulquer Salmaan",
        "title": "Kunjikka / DQ",
        "movies": [
          "Charlie",
          "Kurup",
          "Sita Ramam",
          "Bangalore Days"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Dulquer_promoting_Zoya_Factor_cropped.jpg/330px-Dulquer_promoting_Zoya_Factor_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Dulquer Salmaan is an Indian actor and producer who primarily works in Malayalam films, alongside a few Tamil, Telugu and Hindi films. One of the highest paid Malayalam actors, Salmaan is a recipient of several awards including five Filmfare Awards South, one Kerala State Film Award, one Kerala Film Critics Association Award and one Telangana Gaddar Film Award..",
        "description": "Indian actor, playback singer and producer (born 1983)"
      },
      {
        "id": "fahadh_faasil",
        "name": "Fahadh Faasil",
        "title": "FaFa",
        "movies": [
          "Aavesham",
          "Kumbalangi Nights",
          "Joji",
          "Trance"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Fahadh_Faasil_2019.jpg/330px-Fahadh_Faasil_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Abdul Hameed Mohammed Fahad Fazil, professionally known as Fahadh Faasil, is an Indian actor and producer who primarily works in Malayalam and Tamil films. Noted for his diverse portrayals, Fahadh is considered among the finest actors of Indian cinema.",
        "description": "Indian actor and producer (born 1982)"
      },
      {
        "id": "prithviraj_sukumaran",
        "name": "Prithviraj Sukumaran",
        "title": "Rajuvettan",
        "movies": [
          "The Goat Life (Aadujeevitham)",
          "Lucifer",
          "Jana Gana Mana",
          "Ennu Ninte Moideen"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Prithviraj_at_Aiyyaa_event.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        "extract": "Prithviraj Sukumaran is an Indian actor, producer, director, and playback singer who primarily works in Malayalam cinema. Having appeared in more than 100 films, Prithviraj is among the highest paid Malayalam actors.",
        "description": "Indian actor and filmmaker (born 1982)"
      },
      {
        "id": "tovino_thomas",
        "name": "Tovino Thomas",
        "title": "Minnal Murali",
        "movies": [
          "Minnal Murali",
          "2018",
          "ARM",
          "Thallumaala"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Tovino_Thomas_At_The_%E2%80%98Maari_2%E2%80%99_Press_Meet.jpg/330px-Tovino_Thomas_At_The_%E2%80%98Maari_2%E2%80%99_Press_Meet.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Tovino Thomas is an Indian actor and film producer who predominantly works in Malayalam films. He made his debut in 2012 with the film Prabhuvinte Makkal.",
        "description": "Indian actor and producer (born 1989)"
      },
      {
        "id": "nivin_pauly",
        "name": "Nivin Pauly",
        "title": "Premam Star",
        "movies": [
          "Premam",
          "Bangalore Days",
          "Moothon",
          "Action Hero Biju"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Nivin_Pauly_in_2025.jpg/330px-Nivin_Pauly_in_2025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Nivin Pauly is an Indian actor and producer who works predominantly in Malayalam films. He is the recipient of two Kerala State Film Awards, three Filmfare Awards South, two Kerala Film Critics Association Awards, and seven SIIMA Awards.",
        "description": "Indian actor, producer (born 1984)"
      },
      {
        "id": "asif_ali__actor_",
        "name": "Asif Ali",
        "title": "Versatile Talent",
        "movies": [
          "Kishkindha Kaandam",
          "Kooman",
          "Virus",
          "Uyare"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Asif_Ali_Malayalam_Actor.jpg/330px-Asif_Ali_Malayalam_Actor.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Asif Ali is an Indian actor and producer, who works in the Malayalam film industry. He started his film career with Shyamaprasad's 2009 film, Ritu..",
        "description": "Indian actor and film producer"
      },
      {
        "id": "jayasurya",
        "name": "Jayasurya",
        "title": "Transformative Actor",
        "movies": [
          "Captain",
          "Vellam",
          "Njan Marykutty",
          "Su.. Su... Sudhi Vathmeekam"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Jayasurya_in_2016.jpg/330px-Jayasurya_in_2016.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Jayasurya is an Indian actor, film producer, playback singer, and impressionist who works in Malayalam films. He has appeared in more than 100 films and has won several awards, including a National Film Award, three Kerala State Film Awards, two Filmfare Awards South for acting and Best Actor at the Cincinnati Film Festival held in Cincinnati, US.",
        "description": "Indian actor, distributor, film producer, playback singer, impressionist (born 1979)"
      },
      {
        "id": "kunchacko_boban",
        "name": "Kunchacko Boban",
        "title": "Chackochan",
        "movies": [
          "Nna Thaan Case Kodu",
          "Anjaam Pathiraa",
          "Nayattu",
          "Traffic"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Kunchacko_boban.JPG/330px-Kunchacko_boban.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Kunchacko Boban is an Indian actor and film producer who works in the Malayalam film industry. He is referred to as Chackochan, and during the early 2000s, he was called \"chocolate boy\" because of his romantic image.",
        "description": "Indian actor and film producer"
      }
    ],
    "icon": "🌴",
    "badge": "Malayalam Cinema",
    "accentColor": "#10b981",
    "gradient": "linear-gradient(135deg, #059669, #047857)",
    "bgGlow": "rgba(16, 185, 129, 0.15)"
  },
  {
    "id": "sandalwood",
    "name": "Sandalwood",
    "language": "Kannada Cinema",
    "origin": "India (Karnataka / Bengaluru)",
    "description": "Famous for groundbreaking pan-India blockbusters, rich folklore, powerful mythology, and rooted storytelling.",
    "actors": [
      {
        "id": "yash__actor_",
        "name": "Yash",
        "title": "Rocking Star",
        "movies": [
          "K.G.F: Chapter 1",
          "K.G.F: Chapter 2",
          "Mr. and Mrs. Ramachari",
          "Toxic"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Yash_during_toxic_trailer_launch_event.jpg/330px-Yash_during_toxic_trailer_launch_event.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Yash is an Indian actor and producer who works in Kannada films. Known for his work in mass hero films, he is referred to as \"Rocking Star\" in the media.",
        "description": "Indian actor and film producer (born 1986)"
      },
      {
        "id": "rishab_shetty",
        "name": "Rishab Shetty",
        "title": "Divine Star",
        "movies": [
          "Kantara",
          "Kantara: Chapter 1",
          "Bell Bottom",
          "Garuda Gamana Vrishabha Vahana"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Rishab_Shetty.jpg/330px-Rishab_Shetty.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Rishab Shetty is an Indian actor, film director and producer who works in Kannada cinema. He is known for his roles in Bell Bottom, Garuda Gamana Vrishabha Vahana, and Kantara franchise which was his highest-grossing directorial, and earned him the National Film Award for Best Actor in a Leading Role..",
        "description": "Indian actor and filmmaker (born 1983)"
      },
      {
        "id": "shiva_rajkumar",
        "name": "Shiva Rajkumar",
        "title": "Hat-trick Hero / Shivanna",
        "movies": [
          "Om",
          "Mufti",
          "Tagaru",
          "Bhairathi Ranagal"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Dr_Shiva_Rajkumar_%28cropped%29.jpg/330px-Dr_Shiva_Rajkumar_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Shiva Rajkumar is an Indian actor, film producer and television presenter who predominantly works in Kannada cinema. In a career spanning over three decades, he has worked in over 125 films in Kannada and has received several awards, including four Karnataka State Film Awards, four Filmfare Awards South and six South Indian International Movie Awards..",
        "description": "Indian actor (born 1962)"
      },
      {
        "id": "puneeth_rajkumar",
        "name": "Puneeth Rajkumar",
        "title": "Appu / Power Star (Legend)",
        "movies": [
          "Raajakumara",
          "Appu",
          "Yuvarathnaa",
          "James"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Puneeth_Rajkumar_%281%29.jpg/330px-Puneeth_Rajkumar_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Dr. Puneeth Rajkumar, affectionately known as Appu, was an Indian actor, playback singer, film producer, television presenter and philanthropist who worked in Kannada cinema.",
        "description": "Indian Kannada actor and film producer (1975–2021)"
      },
      {
        "id": "sudeepa",
        "name": "Kiccha Sudeep",
        "title": "Badshah / Kiccha",
        "movies": [
          "Eega",
          "Vikrant Rona",
          "Pailwaan",
          "Kotigobba 2"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Sudeep_interview_TeachAIDS.jpg/330px-Sudeep_interview_TeachAIDS.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Sudeep Sanjeev, also known as Sudeepa, is an Indian actor, director, producer, screenwriter, singer and television presenter, who primarily works in Kannada cinema. He has also worked in Hindi, Telugu and Tamil films.",
        "description": "Indian actor and director (born 1971)"
      },
      {
        "id": "rakshit_shetty",
        "name": "Rakshit Shetty",
        "title": "Simple Star",
        "movies": [
          "777 Charlie",
          "Ulidavaru Kandanthe",
          "Sapta Saagaradaache Ello",
          "Avane Srimannarayana"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/RakshitShetty.jpg/330px-RakshitShetty.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Rakshit Shetty is an Indian actor and filmmaker working predominantly in Kannada cinema. He is the recipient of a National Film Award, three Filmfare Awards South, four Karnataka State Film Awards and five SIIMA Awards..",
        "description": "Indian actor and filmmaker"
      },
      {
        "id": "upendra__actor_",
        "name": "Upendra",
        "title": "Real Star / Super Star",
        "movies": [
          "Upendra",
          "A",
          "Rakta Kanneeru",
          "UI"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Upendra_at_KLE_Society%27s_Law-College%2C_Bangalore_2.jpg/330px-Upendra_at_KLE_Society%27s_Law-College%2C_Bangalore_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Upendra Rao is an Indian actor, film director, screenwriter, lyricist, playback singer, producer and politician, known for his work in Kannada cinema. He has also worked in a few Telugu and Tamil films..",
        "description": "Indian actor and filmmaker (born 1968)"
      },
      {
        "id": "darshan__actor_",
        "name": "Darshan",
        "title": "Challenging Star",
        "movies": [
          "Kranthi",
          "Kaatera",
          "Roberrt",
          "Kurukshetra"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Darshan_Thoogudeepa_kannada_film_actor.jpg/330px-Darshan_Thoogudeepa_kannada_film_actor.jpg",
        "extract": "Darshan Thoogudeepa, known mononymously as Darshan, is an Indian actor and producer who primarily works in Kannada films, known for mass blockbusters like Roberrt, Kaatera, and Kurukshetra.",
        "description": "Indian actor and film producer (born 1977)"
      },
      {
        "id": "sriimurali",
        "name": "Sriimurali",
        "title": "Roaring Star",
        "movies": [
          "Ugramm",
          "Mufti",
          "Madhagaja",
          "Bagheera"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Sriimurali_%2802%29.jpg/330px-Sriimurali_%2802%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Sri Murali Gowda, known as Sriimurali and sometimes Murali, is an Indian actor who works predominantly in Kannada cinema. After making his lead debut in 2003 in Chandra Chakori, he appeared in Kanti as the eponymous lead, a performance that won him the Karnataka State Film Award for Best Actor in 2004..",
        "description": "Indian actor"
      },
      {
        "id": "ganesh__actor_",
        "name": "Ganesh",
        "title": "Golden Star",
        "movies": [
          "Mungaru Male",
          "Gaalipata",
          "Cheluvina Chittara",
          "Chamak"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Ganesh_%28actor%29.jpg/330px-Ganesh_%28actor%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Ganesh, known mononymously as Ganesh, is an Indian actor, director, producer and television presenter known for his work in Kannada cinema. Through his career in films and television shows, he has become one of the most popular celebrities and highest-paid actors in Kannada cinema.",
        "description": "Indian actor and television presenter (born 1978)"
      }
    ],
    "icon": "👑",
    "badge": "Kannada Cinema",
    "accentColor": "#eab308",
    "gradient": "linear-gradient(135deg, #ca8a04, #a16207)",
    "bgGlow": "rgba(234, 179, 8, 0.15)"
  },
  {
    "id": "hollywood",
    "name": "Hollywood",
    "language": "American Cinema",
    "origin": "United States (Los Angeles)",
    "description": "The global epicenter of blockbuster filmmaking, cutting-edge visual effects, and universally recognized cinematic icons.",
    "actors": [
      {
        "id": "leonardo_dicaprio",
        "name": "Leonardo DiCaprio",
        "title": "Oscar Winner",
        "movies": [
          "Titanic",
          "Inception",
          "The Revenant",
          "The Wolf of Wall Street"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/LeoPTABFI191125-28_%28cropped%29.jpg/330px-LeoPTABFI191125-28_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Leonardo Wilhelm DiCaprio is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, an Actor Award, a BAFTA Award, an Emmy Award, a Silver Bear and three Golden Globes.",
        "description": "American actor (born 1974)"
      },
      {
        "id": "tom_cruise",
        "name": "Tom Cruise",
        "title": "The Action King",
        "movies": [
          "Top Gun: Maverick",
          "Mission: Impossible",
          "Edge of Tomorrow",
          "Jerry Maguire"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Tom_Cruise_at_53rd_Saturn_Awards_2026-01.jpg/330px-Tom_Cruise_at_53rd_Saturn_Awards_2026-01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Thomas Cruise Mapother IV is an American actor and filmmaker. His accolades include an Honorary Palme d'Or, an Academy Honorary Award, and three Golden Globe Awards, as well as nominations for four competitive Academy Awards.",
        "description": "American actor and film producer (born 1962)"
      },
      {
        "id": "robert_downey_jr_",
        "name": "Robert Downey Jr.",
        "title": "Iron Man",
        "movies": [
          "Iron Man",
          "Oppenheimer",
          "The Avengers",
          "Sherlock Holmes"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/RobertDowneyJr-byPhilipRomano7_%28cropped%29.jpg/330px-RobertDowneyJr-byPhilipRomano7_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Robert John Downey Jr. is an American actor and producer.",
        "description": "American actor (born 1965)"
      },
      {
        "id": "brad_pitt",
        "name": "Brad Pitt",
        "title": "Hollywood Icon",
        "movies": [
          "Fight Club",
          "Once Upon a Time in Hollywood",
          "Se7en",
          "Inglourious Basterds"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/330px-Brad_Pitt-69858.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "William Bradley Pitt is an American actor and film producer. In a film career spanning more than thirty-five years, Pitt has received numerous accolades, including two Academy Awards, two British Academy Film Awards, two Golden Globe Awards, two Primetime Emmy Awards, and one Volpi Cup.",
        "description": "American actor (born 1963)"
      },
      {
        "id": "christian_bale",
        "name": "Christian Bale",
        "title": "Method Master / The Dark Knight",
        "movies": [
          "The Dark Knight",
          "American Psycho",
          "The Prestige",
          "Ford v Ferrari"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/330px-Christian_Bale-7837.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Christian Charles Philip Bale is an English actor. Known for his versatility and physical transformations for his roles, he has been a leading man in films of several genres.",
        "description": "English actor (born 1974)"
      },
      {
        "id": "cillian_murphy",
        "name": "Cillian Murphy",
        "title": "The Master of Eyes",
        "movies": [
          "Oppenheimer",
          "Peaky Blinders",
          "Inception",
          "Dunkirk"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Cillian_Murphy_at_the_London_premier_of_Steve_in_September_2025_%28cropped%29.jpg/330px-Cillian_Murphy_at_the_London_premier_of_Steve_in_September_2025_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Cillian Murphy is an Irish actor and film producer. His works encompass both stage and screen, and his accolades include an Academy Award, a BAFTA Award, and a Golden Globe Award..",
        "description": "Irish actor (born 1976)"
      },
      {
        "id": "keanu_reeves",
        "name": "Keanu Reeves",
        "title": "The Baba Yaga",
        "movies": [
          "The Matrix",
          "John Wick",
          "Speed",
          "Constantine"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg/330px-Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Keanu Charles Reeves is a Canadian actor and musician. The recipient of numerous accolades in a career on screen spanning four decades, he is known for his leading roles in action films, his amiable public image, and his philanthropic efforts.",
        "description": "Canadian actor (born 1964)"
      },
      {
        "id": "denzel_washington",
        "name": "Denzel Washington",
        "title": "Two-time Oscar Legend",
        "movies": [
          "Training Day",
          "The Equalizer",
          "Glory",
          "Malcolm X"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Denzel_Washington_at_the_2025_Cannes_Film_Festival.jpg/330px-Denzel_Washington_at_the_2025_Cannes_Film_Festival.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Denzel Hayes Washington Jr. is an American actor and producer.",
        "description": "American actor (born 1954)"
      },
      {
        "id": "johnny_depp",
        "name": "Johnny Depp",
        "title": "Captain Jack Sparrow",
        "movies": [
          "Pirates of the Caribbean",
          "Edward Scissorhands",
          "Sweeney Todd",
          "Alice in Wonderland"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Johnny_Depp_2020.jpg/330px-Johnny_Depp_2020.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "John Christopher Depp II is an American actor, musician, and filmmaker. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award as well as nominations for three Academy Awards and two British Academy Film Awards.",
        "description": "American actor (born 1963)"
      },
      {
        "id": "will_smith",
        "name": "Will Smith",
        "title": "Fresh Prince",
        "movies": [
          "The Pursuit of Happyness",
          "Men in Black",
          "I Am Legend",
          "King Richard"
        ],
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg/330px-TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "extract": "Willard Carroll Smith II is an American actor, rapper, and film producer. Known for his work in both the screen and music industries, his accolades include an Academy Award, a Golden Globe Award, a BAFTA Award, and four Grammy Awards.",
        "description": "American actor and rapper (born 1968)"
      }
    ],
    "icon": "🌎",
    "badge": "American Cinema",
    "accentColor": "#8b5cf6",
    "gradient": "linear-gradient(135deg, #7c3aed, #6d28d9)",
    "bgGlow": "rgba(139, 92, 246, 0.15)"
  }
];

// Application State
let currentIndustryId = 'tollywood';
let currentActorIndex = 0; // 0 to 9 (10 actors per industry)
let isLoopRunning = true;
let loopSpeedSeconds = 4.5;
let loopTimer = null;
let progressStartTime = 0;
let progressAnimationId = null;
let currentViewMode = 'carousel'; // 'carousel' or 'grid'
let soundEnabled = false;

// Audio Context for subtle cinematic UI sounds (optional toggle)
let audioCtx = null;
function playSound(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'tick') {
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } else if (type === 'switch') {
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(540, audioCtx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    }
  } catch (e) {
    // audio not supported or blocked
  }
}

// Helper: Get currently active industry object
function getCurrentIndustry() {
  return filmIndustries.find(ind => ind.id === currentIndustryId) || filmIndustries[0];
}

// Helper: Generate fallback SVG data URL if image fails to load
function getFallbackAvatar(name, industryName) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e1b4b" />
        <stop offset="50%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#ec4899" />
      </linearGradient>
    </defs>
    <rect width="600" height="800" fill="url(#bg)"/>
    <circle cx="300" cy="340" r="140" fill="#1e293b" stroke="url(#gold)" stroke-width="4"/>
    <text x="300" y="375" font-family="system-ui, -apple-system, sans-serif" font-size="90" font-weight="bold" fill="#f8fafc" text-anchor="middle">${initials}</text>
    <text x="300" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="800" fill="#f8fafc" text-anchor="middle">${name}</text>
    <text x="300" y="585" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="#94a3b8" text-anchor="middle">${industryName}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Fallback image error handler
window.handleImageError = function(imgElement, actorName, industryName) {
  imgElement.onerror = null;
  imgElement.src = getFallbackAvatar(actorName, industryName);
};

// Render Industry Selector Tabs
function renderIndustryTabs() {
  const container = document.getElementById('industry-tabs');
  if (!container) return;

  container.innerHTML = filmIndustries.map(ind => {
    const isActive = ind.id === currentIndustryId;
    return `
      <button class="industry-tab-btn ${isActive ? 'active' : ''}" 
              data-industry="${ind.id}" 
              style="--accent: ${ind.accentColor}">
        <span class="tab-icon">${ind.icon}</span>
        <span class="tab-label">
          <span class="tab-name">${ind.name}</span>
          <span class="tab-sub">${ind.badge}</span>
        </span>
        <span class="tab-count">10 Actors</span>
      </button>
    `;
  }).join('');

  // Add click events to industry buttons
  container.querySelectorAll('.industry-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const indId = btn.getAttribute('data-industry');
      selectIndustry(indId);
    });
  });
}

// Select an Industry
function selectIndustry(industryId) {
  if (currentIndustryId === industryId) return;
  currentIndustryId = industryId;
  currentActorIndex = 0; // Always start with Actor #1 on industry switch
  
  playSound('switch');
  applyIndustryTheme();
  renderIndustryTabs();
  renderActorSpotlight();
  renderFilmstrip();
  renderGridView();
  restartLoop();
}

// Apply Industry Theme Styling (Ambient Lighting & Color Variable)
function applyIndustryTheme() {
  const ind = getCurrentIndustry();
  document.documentElement.style.setProperty('--current-accent', ind.accentColor);
  document.documentElement.style.setProperty('--current-glow', ind.bgGlow);
  
  const headerBadge = document.getElementById('industry-banner-badge');
  const headerTitle = document.getElementById('industry-banner-title');
  const headerDesc = document.getElementById('industry-banner-desc');
  const headerOrigin = document.getElementById('industry-banner-origin');
  
  if (headerBadge) headerBadge.innerHTML = `${ind.icon} ${ind.badge}`;
  if (headerTitle) headerTitle.textContent = `${ind.name} Top 10 Actors`;
  if (headerDesc) headerDesc.textContent = ind.description;
  if (headerOrigin) headerOrigin.innerHTML = `<strong>Region:</strong> ${ind.origin}`;
}

// Render the Main Spotlight Actor Card
function renderActorSpotlight() {
  const ind = getCurrentIndustry();
  const actor = ind.actors[currentActorIndex];
  if (!actor) return;

  const actorNumber = currentActorIndex + 1;
  const totalActors = ind.actors.length; // 10

  // Update Sequence Counter
  const counterCurrent = document.getElementById('counter-current');
  const counterTotal = document.getElementById('counter-total');
  if (counterCurrent) counterCurrent.textContent = actorNumber < 10 ? '0' + actorNumber : actorNumber;
  if (counterTotal) counterTotal.textContent = totalActors < 10 ? '0' + totalActors : totalActors;

  // Render Step Indicators (1 to 10 dots)
  renderStepIndicators(actorNumber, totalActors);

  // Update Spotlight Card Elements with smooth fade
  const card = document.getElementById('spotlight-card');
  if (card) {
    card.classList.remove('card-transition-in');
    void card.offsetWidth; // Trigger reflow for animation
    card.classList.add('card-transition-in');
  }

  const photoElem = document.getElementById('actor-photo');
  const nameElem = document.getElementById('actor-name');
  const titleElem = document.getElementById('actor-title');
  const extractElem = document.getElementById('actor-extract');
  const moviesElem = document.getElementById('actor-movies');
  const numberBadge = document.getElementById('actor-number-badge');
  const wikiBtn = document.getElementById('actor-wiki-btn');

  if (photoElem) {
    photoElem.alt = actor.name;
    photoElem.src = actor.image;
    photoElem.onerror = () => handleImageError(photoElem, actor.name, ind.name);
  }

  if (nameElem) nameElem.textContent = actor.name;
  if (titleElem) titleElem.textContent = actor.title || 'Leading Star';
  if (extractElem) extractElem.textContent = actor.extract || actor.description;
  if (numberBadge) numberBadge.textContent = `Actor #${actorNumber} of ${totalActors}`;

  if (moviesElem) {
    moviesElem.innerHTML = (actor.movies || []).map(movie => 
      `<span class="movie-pill"><span class="movie-icon">🎬</span> ${movie}</span>`
    ).join('');
  }

  if (wikiBtn) {
    const wikiQuery = encodeURIComponent(actor.name + ' actor');
    wikiBtn.href = `https://en.wikipedia.org/wiki/Special:Search?search=${wikiQuery}`;
  }

  // Update Filmstrip active item & auto scroll
  updateFilmstripActiveState();
}

// Render Progress Dots / Steps (1 to 10)
function renderStepIndicators(current, total) {
  const container = document.getElementById('step-indicators');
  if (!container) return;

  let dotsHtml = '';
  for (let i = 1; i <= total; i++) {
    const isPassed = i < current;
    const isCurrent = i === current;
    dotsHtml += `
      <button class="step-dot ${isCurrent ? 'active' : ''} ${isPassed ? 'passed' : ''}" 
              data-index="${i - 1}" 
              title="Jump to Actor #${i}"
              aria-label="Actor ${i}">
        ${i}
      </button>
    `;
  }
  container.innerHTML = dotsHtml;

  container.querySelectorAll('.step-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      goToActor(idx);
    });
  });
}

// Render Bottom 10-Actor Filmstrip (Thumbnail Carousel)
function renderFilmstrip() {
  const container = document.getElementById('filmstrip-track');
  if (!container) return;

  const ind = getCurrentIndustry();
  container.innerHTML = ind.actors.map((actor, idx) => {
    const num = idx + 1;
    const isCurrent = idx === currentActorIndex;
    return `
      <div class="filmstrip-item ${isCurrent ? 'active' : ''}" data-index="${idx}">
        <div class="filmstrip-thumb-wrapper">
          <img src="${actor.image}" 
               alt="${actor.name}" 
               class="filmstrip-thumb"
               loading="lazy"
               referrerpolicy="no-referrer"
               onerror="handleImageError(this, '${actor.name.replace(/'/g, "\\'")}', '${ind.name}')" />
          <span class="filmstrip-number">#${num}</span>
        </div>
        <div class="filmstrip-info">
          <span class="filmstrip-name">${actor.name}</span>
          <span class="filmstrip-title">${actor.title}</span>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.filmstrip-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      goToActor(idx);
    });
  });
}

// Keep the active filmstrip item in view
function updateFilmstripActiveState() {
  const container = document.getElementById('filmstrip-track');
  if (!container) return;

  const items = container.querySelectorAll('.filmstrip-item');
  items.forEach((item, idx) => {
    if (idx === currentActorIndex) {
      item.classList.add('active');
      // Scroll smoothly into view
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      item.classList.remove('active');
    }
  });
}

// Render "All 10 Actors" Grid View
function renderGridView() {
  const gridContainer = document.getElementById('all-actors-grid');
  if (!gridContainer) return;

  const ind = getCurrentIndustry();
  const searchInput = document.getElementById('actor-search');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  const filteredActors = ind.actors.filter(actor => {
    if (!query) return true;
    return actor.name.toLowerCase().includes(query) ||
           (actor.title && actor.title.toLowerCase().includes(query)) ||
           (actor.movies && actor.movies.some(m => m.toLowerCase().includes(query)));
  });

  if (filteredActors.length === 0) {
    gridContainer.innerHTML = `
      <div class="grid-empty-state">
        <span class="empty-icon">🔍</span>
        <p>No actor found matching "${query}". Try a different name or movie.</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filteredActors.map((actor) => {
    const originalIndex = ind.actors.indexOf(actor);
    const num = originalIndex + 1;
    return `
      <div class="actor-grid-card" data-index="${originalIndex}">
        <div class="grid-card-img-wrap">
          <img src="${actor.image}" 
               alt="${actor.name}" 
               class="grid-card-img" 
               loading="lazy" 
               referrerpolicy="no-referrer"
               onerror="handleImageError(this, '${actor.name.replace(/'/g, "\\'")}', '${ind.name}')" />
          <span class="grid-card-badge">#${num} of 10</span>
        </div>
        <div class="grid-card-body">
          <h3 class="grid-card-name">${actor.name}</h3>
          <p class="grid-card-title">${actor.title}</p>
          <div class="grid-card-movies">
            ${(actor.movies || []).slice(0, 3).map(m => `<span class="mini-movie-pill">${m}</span>`).join('')}
          </div>
          <button class="grid-card-open-btn" onclick="openActorFromGrid(${originalIndex})">
            <span>Open in Loop</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.openActorFromGrid = function(index) {
  setViewMode('carousel');
  goToActor(index);
};

// Next Actor in the Loop (Loops 0 -> 1 -> ... -> 9 -> 0)
function nextActor() {
  const ind = getCurrentIndustry();
  currentActorIndex = (currentActorIndex + 1) % ind.actors.length; // Seamless loop!
  playSound('tick');
  renderActorSpotlight();
  restartLoop();
}

// Previous Actor in the Loop (Loops 0 -> 9)
function prevActor() {
  const ind = getCurrentIndustry();
  currentActorIndex = (currentActorIndex - 1 + ind.actors.length) % ind.actors.length;
  playSound('tick');
  renderActorSpotlight();
  restartLoop();
}

// Go to specific Actor Index (0 to 9)
function goToActor(index) {
  const ind = getCurrentIndustry();
  if (index >= 0 && index < ind.actors.length) {
    currentActorIndex = index;
    playSound('tick');
    renderActorSpotlight();
    restartLoop();
  }
}

// Loop Progress & Timer
function startLoopProgress() {
  stopLoopProgress();
  if (!isLoopRunning) return;

  progressStartTime = performance.now();
  const progressBar = document.getElementById('loop-progress-fill');
  const durationMs = loopSpeedSeconds * 1000;

  function tickProgress(now) {
    const elapsed = now - progressStartTime;
    const fraction = Math.min(elapsed / durationMs, 1);
    
    if (progressBar) {
      progressBar.style.width = (fraction * 100) + '%';
    }

    if (fraction < 1) {
      progressAnimationId = requestAnimationFrame(tickProgress);
    } else {
      // Loop fired! Advance to next actor
      nextActor();
    }
  }

  progressAnimationId = requestAnimationFrame(tickProgress);
}

function stopLoopProgress() {
  if (progressAnimationId) {
    cancelAnimationFrame(progressAnimationId);
    progressAnimationId = null;
  }
  const progressBar = document.getElementById('loop-progress-fill');
  if (progressBar) progressBar.style.width = '0%';
}

function restartLoop() {
  stopLoopProgress();
  if (isLoopRunning) {
    startLoopProgress();
  }
}

// Toggle Play / Pause Loop
function toggleLoopPlayPause() {
  isLoopRunning = !isLoopRunning;
  updatePlayPauseUI();
  if (isLoopRunning) {
    startLoopProgress();
  } else {
    stopLoopProgress();
  }
}

function updatePlayPauseUI() {
  const btn = document.getElementById('play-pause-btn');
  const btnText = document.getElementById('play-pause-text');
  const btnIcon = document.getElementById('play-pause-icon');
  const statusBadge = document.getElementById('loop-status-indicator');

  if (isLoopRunning) {
    if (btnText) btnText.textContent = 'Pause Loop';
    if (btnIcon) btnIcon.innerHTML = '&#10074;&#10074;'; // Pause icon
    if (btn) btn.classList.add('running');
    if (statusBadge) {
      statusBadge.innerHTML = '<span class="status-pulse running"></span> Auto-looping Active';
    }
  } else {
    if (btnText) btnText.textContent = 'Resume Loop';
    if (btnIcon) btnIcon.innerHTML = '&#9658;'; // Play icon
    if (btn) btn.classList.remove('running');
    if (statusBadge) {
      statusBadge.innerHTML = '<span class="status-pulse paused"></span> Loop Paused';
    }
  }
}

// Set View Mode ('carousel' vs 'grid')
function setViewMode(mode) {
  currentViewMode = mode;
  const carouselSection = document.getElementById('carousel-section');
  const gridSection = document.getElementById('grid-section');
  const carouselTabBtn = document.getElementById('view-carousel-btn');
  const gridTabBtn = document.getElementById('view-grid-btn');

  if (mode === 'carousel') {
    if (carouselSection) carouselSection.classList.remove('hidden');
    if (gridSection) gridSection.classList.add('hidden');
    if (carouselTabBtn) carouselTabBtn.classList.add('active');
    if (gridTabBtn) gridTabBtn.classList.remove('active');
  } else {
    if (carouselSection) carouselSection.classList.add('hidden');
    if (gridSection) gridSection.classList.remove('hidden');
    if (carouselTabBtn) carouselTabBtn.classList.remove('active');
    if (gridTabBtn) gridTabBtn.classList.add('active');
    renderGridView();
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Next / Prev buttons
  const nextBtn = document.getElementById('next-actor-btn');
  const prevBtn = document.getElementById('prev-actor-btn');
  const heroNext = document.getElementById('hero-next-btn');
  const heroPrev = document.getElementById('hero-prev-btn');

  if (nextBtn) nextBtn.addEventListener('click', nextActor);
  if (prevBtn) prevBtn.addEventListener('click', prevActor);
  if (heroNext) heroNext.addEventListener('click', nextActor);
  if (heroPrev) heroPrev.addEventListener('click', prevActor);

  // Play / Pause button
  const playPauseBtn = document.getElementById('play-pause-btn');
  if (playPauseBtn) playPauseBtn.addEventListener('click', toggleLoopPlayPause);

  // Loop Speed Dropdown
  const speedSelect = document.getElementById('loop-speed-select');
  if (speedSelect) {
    speedSelect.addEventListener('change', (e) => {
      loopSpeedSeconds = parseFloat(e.target.value);
      restartLoop();
    });
  }

  // View switchers
  const viewCarouselBtn = document.getElementById('view-carousel-btn');
  const viewGridBtn = document.getElementById('view-grid-btn');
  if (viewCarouselBtn) viewCarouselBtn.addEventListener('click', () => setViewMode('carousel'));
  if (viewGridBtn) viewGridBtn.addEventListener('click', () => setViewMode('grid'));

  // Sound toggle button
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle('active', soundEnabled);
      soundBtn.innerHTML = soundEnabled ? '🔊 Sound: On' : '🔇 Sound: Off';
      if (soundEnabled) playSound('tick');
    });
  }

  // Search input in grid
  const searchInput = document.getElementById('actor-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderGridView();
    });
  }

  // Filmstrip scroll buttons
  const stripLeftBtn = document.getElementById('filmstrip-scroll-left');
  const stripRightBtn = document.getElementById('filmstrip-scroll-right');
  const filmstripTrack = document.getElementById('filmstrip-track');

  if (stripLeftBtn && filmstripTrack) {
    stripLeftBtn.addEventListener('click', () => {
      filmstripTrack.scrollBy({ left: -240, behavior: 'smooth' });
    });
  }
  if (stripRightBtn && filmstripTrack) {
    stripRightBtn.addEventListener('click', () => {
      filmstripTrack.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }

  // Pause on hover over spotlight card (optional smooth user experience)
  const spotlightCard = document.getElementById('spotlight-card');
  if (spotlightCard) {
    spotlightCard.addEventListener('mouseenter', () => {
      // Temporarily pause animation on hover
      stopLoopProgress();
      const statusBadge = document.getElementById('loop-status-indicator');
      if (statusBadge && isLoopRunning) {
        statusBadge.innerHTML = '<span class="status-pulse paused"></span> Paused (Hovering)';
      }
    });
    spotlightCard.addEventListener('mouseleave', () => {
      if (isLoopRunning) {
        updatePlayPauseUI();
        startLoopProgress();
      }
    });
  }

  // Keyboard navigation: Left/Right arrows, Spacebar for pause/play
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') {
      nextActor();
    } else if (e.key === 'ArrowLeft') {
      prevActor();
    } else if (e.key === ' ') {
      e.preventDefault();
      toggleLoopPlayPause();
    }
  });

  // Touch Swipe navigation on mobile devices
  let touchStartX = 0;
  let touchEndX = 0;
  if (spotlightCard) {
    spotlightCard.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    spotlightCard.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        nextActor(); // swiped left -> next
      } else {
        prevActor(); // swiped right -> prev
      }
    }
  }
}

// Initialize CineVerse Application
document.addEventListener('DOMContentLoaded', () => {
  renderIndustryTabs();
  applyIndustryTheme();
  renderActorSpotlight();
  renderFilmstrip();
  renderGridView();
  setupEventListeners();
  updatePlayPauseUI();
  startLoopProgress();
});
