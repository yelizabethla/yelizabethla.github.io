/* template 

{
  name: <title of project>,
  description: <h3 title on card>,
  jobs: <array of job titles (can be 1 or more)>,
  tileImage: {
    uri: <path for asset>,
    alt: <alt text for image>,
  },
  heroImage: {
    uri: <path for asset>,
    alt: <alt text for image>,
    height: <height of image>,
  },
  isPasswordProtected: <boolean> | undefined,
  pathname: <path for route via index.js>,
  blog: [],
}

*/

export const blogEntries = [
  { name: 'Auto Refi',
    description: 'Increase conversion rate through transparency',
    jobs: ['Senior UX Designer'],
    // TODO: add correct image assets
    tileImage: {
      uri: '/assets/portfolio/auto_refi.webp',
      alt: 'Capital One Auto Refinance Blog Tile',
    },
    heroImage: {
      uri: '/assets/portfolio/tbd',
      alt: 'Capital One Auto Refinance Cover',
    },
    pathname: '/portfolio/auto_refi',
    isPasswordProtected: true,

    // TODO: add blog details
    blog: [
      { type: 'title',
        data: 'Overview'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Lab & Duration',
            body: `[Smart Sensing for Humans Lab](http://smashlab.io/), Feb 2019 - May 2020`,
            weight: 3,
          },
          {
            title: 'Team',
            body: `Julian Ramos *PhD Candidate*, Carolyn Zhong *Designer*`,
            weight: 3,
          },
          {
            title: 'Primary Role',
            body: `Research Participant Recruiter: *screened and onboarded participants*
            User Researcher: *conducted research studies and synthesis activities*
            Video Editor: *created a project overview video for a design conference*`,
            weight: 6,
          },
        ]
      },
      { type: 'title',
        data: 'Challenge'
      },
      { type: 'text columns',
        data: [
          {
            title: 'How might we utilize data to help people improve their daily habits, sleep habits, and sleep quality?',
            body: `Although sleep is essential for a person's health and wellbeing, research conducted by the NSF has shown that tens of millions of people are sleep deprived. Over the years, the number of sleep-tracking products have grown, but none of them help people understand how to improve their sleep. There is a need for a tool that goes beyond the generic tip of "minimize caffine intake" and "reduce blue light before bed", and help each individual understand what specific habits benefit their sleep.`,
          },
        ]
      },
      { type: 'title',
        data: 'The Project'
      },
      { type: 'body',
        data: `SleepU is a sleep-intervention app that uses Fitbit data and user-inputed trackings to provide personal sleep recommendations. These help users adjust their daily behaviors and sleep environment to optimize their sleep quality.`
      },
      { type: 'body',
        data: `It accomplishes this with four features:`
      },
      { type: 'text columns',
        data: [
          {
            title: 'Habit Tracker',
            body: `A daily record of major factors of sleep (e.g. meal times, exercise, stress levels) to determine which combination of habits result in the best sleep for the individual`,
            weight: 3,
          },
          {
            title: 'Sleep Decision Making Tool',
            body: `A machine learning model that predicts how an evening activity will affect an individuals sleep, and allows them to make informed decisions`,
            weight: 3,
          },
          {
            title: 'Interruptibility',
            body: `An algorithm that determines how receptive one is to receive a notification based on phone usage (e.g. checking another notficiation, extensive use of social app)`,
            weight: 3,
          },
          {
            title: 'Contextual Reminders',
            body: `A notification that gives a recommendation based on the time and location of the individual (e.g. if at a coffee shop past 3 pm, will remind them to buy decaf)`,
            weight: 3,
          },
        ]
      },
      { type: 'title',
        data: 'Approach'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Beta Testing',
            body: `28 college students participated in a semester long study. In the first 2 weeks, they only used a Fitbit to record their sleep data. Afterwards, they were assigned to either visit a health specialist who provided them with a sleep assessment and consulation, or used SleepU. After a month of the first condition, participants were assigned to the other conditions for another month.\n* Everyday, participants filled out a "Sleep Diary" where they logged habits that contribute to sleep\n* Before and after each phase (4 times total), participants filled out a questionnaire that acccessed their sleep practices and other habits`,
            weight: 6,
          },
          {
            title: 'Semi-structured Interview',
            body: `Interviewed half the participants from prior study and asked about their sleep during the semester.\n* Compared their sleep to other semesters, identified external factors beyond the study (e.g. class workload)\n* Discussed what factors they think affect their sleep, and any changes they made in their habit\n* Compared the two conditions: sleep appointment and using SleepU\n* Recounted their experience with SleepU; which recommendations they were following, and which weren't useful/ relevant`,
            weight: 6,
          },
          {
            title: 'Affinity Diagram',
            body: `Transcribed 13 interviews and grouped similar quotes to find common themes. We found:\n* Overall, using SleepU was as effective, or better than visiting a health specialist\n* Participants found the recommendations and habit tracking to be helpful; they became more conscious of factors that affect their sleep (e.g. many established a bedtime routine)\n* Many expressed that recommendations got repetivitive after a while. This was because after the model determined which habits work best for the individual, it would recommend the same ones to ensure that they were being followed. There is a need for people to mark which habits they reguarly practice without the help of the app, so that SleepU can recommend new ones.\n* Participants also shared that they wanted to learn more about sleep in general, and why specific recommendations improve sleep`,
          }
        ]
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/sleepU_storyboard.webp',
          alt: 'sleepU Storyboard',
        }
      },
      { type: 'text columns',
        data: [
          {
            title: 'Storyboard',
            body: `Brainstormed ways we can improve SleepU based on user needs identified and specific feedback we received from participants during the interview. Ideas centered around two types of interactions:\n* App to person (storyboards 2, 3, 4): Make recommendations more specific and actionable (e.g. contextual reminders through the use phone data, time, and location)\n* Person to app (storyboards 1, 5, 6): Visualize/ explain how actions affect sleep, help individuals make good decisions for their sleep (e.g. decision making tool, habit tracker)`,
            weight: 4,
            midWeight: 12,
          },
          {
            title: 'Speed Dating',
            body: `Interviewed 8 new individuals; learned if people could relate to scenarios and if there was an actual need for the solution. Key findings:\n* Storyboard 2: People know that it's important to have a consistent sleep schedule, but aren't always able to go to sleep when they want because they are finishing up work. In this case, a reminder from SleepU wouldn't be helpful\n* Storyboards 3 and 4 were liked better, since it's regarding something the individual has control over and preventing bad choices\n* Storyboard 5: Logging habits takes effort, and inputing data would depend on how motivated they are to improve their sleep\n* Storyboard 6: Depending on the importance of the morning plan, usage of decision tool would differ (e.g. if high stakes, would still stay in for mental preperation)`,
            weight: 8,
            midWeight: 12,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/sleepU_comic_1.webp',
            alt: 'sleepU Comic 1',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_2.webp',
            alt: 'sleepU Comic 2',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_3.webp',
            alt: 'sleepU Comic 3',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_4.webp',
            alt: 'sleepU Comic 4',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_5.webp',
            alt: 'sleepU Comic 5',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_6.webp',
            alt: 'sleepU Comic 6',
            weight: 4,
            midWeight: 6,
          },
        ],
      },
      { type: 'text columns',
        data: [
          {
            title: 'Interface Design',
            body: `A simple interface design for the home page, which will display the recommendations for the day`,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/sleepU_mobile_1.webp',
            alt: 'sleepU Mobile Slide 1',
            weight: 3,
          },
          {
            src: '/assets/portfolio/sleepU_mobile_2.webp',
            alt: 'sleepU Mobile Slide 2',
            weight: 3,
          },{
            src: '/assets/portfolio/sleepU_mobile_3.webp',
            alt: 'sleepU Mobile Slide 3',
            weight: 3,
          },{
            src: '/assets/portfolio/sleepU_mobile_4.webp',
            alt: 'sleepU Mobile Slide 4',
            weight: 3,
          },
        ],
      },
      { type: 'title',
        data: 'Design Conference'
      },
      { type: 'body',
        data: `In August 2019, we submitted our project to the [Health x Design](https://centerhxd.com/collaborations/projects/health-x-design-building-health-into-everyday-life/): *Building Health into Everyday Life* Design Challenge. For the submission, I created a 3 minute video describing our project, from the importance of our work and the functionality of SleepU.`
      },
      { type: 'video',
        data: {
          src: 'https://www.youtube.com/embed/YVGc2D4oShU',
          title: 'Sleep U Demo',
          allowFullScreen: true,
        }
      },
      { type: 'padding'
      },
    ]
  },
  // { name: 'E1',
  //   description: 'Standardize & optimize workflow',
  //   jobs: ['UX Designer'],
  //   heroImage: './assets/portfolio/sleepU.webp',
  //   pathname: '/portfolio/e1',
  //   blog: [
  //     { type: 'title',
  //       data: 'Overview'
  //     },
  //     { type: 'text columns',
  //       data: [
  //         {
  //           title: 'Project & Duration',
  //           body: `[ExceptionsOne, February 2024 - Current`,
  //           weight: 3,
  //         },
  //         {
  //           title: 'Team',
  //           body: `Henjo Mey *PhD Candidate*, Carolyn Zhong *Designer*`,
  //           weight: 3,
  //         },
  //         {
  //           title: 'Primary Role',
  //           body: `Research Participant Recruiter: *screened and onboarded participants*
  //           User Researcher: *conducted research studies and synthesis activities*
  //           Video Editor: *created a project overview video for a design conference*`,
  //           weight: 6,
  //         },
  //       ]
  //     },
  //     { type: 'title',
  //       data: 'Challenge'
  //     },
  //     { type: 'text columns',
  //       data: [
  //         {
  //           title: 'How might we utilize data to help people improve their daily habits, sleep habits, and sleep quality?',
  //           body: `Although sleep is essential for a person's health and wellbeing, research conducted by the NSF has shown that tens of millions of people are sleep deprived. Over the years, the number of sleep-tracking products have grown, but none of them help people understand how to improve their sleep. There is a need for a tool that goes beyond the generic tip of "minimize caffine intake" and "reduce blue light before bed", and help each individual understand what specific habits benefit their sleep.`,
  //         },
  //       ]
  //     },
  //     { type: 'title',
  //       data: 'The Project'
  //     },
  //     { type: 'body',
  //       data: `SleepU is a sleep-intervention app that uses Fitbit data and user-inputed trackings to provide personal sleep recommendations. These help users adjust their daily behaviors and sleep environment to optimize their sleep quality.`
  //     },
  //     { type: 'body',
  //       data: `It accomplishes this with four features:`
  //     },
  //     { type: 'text columns',
  //       data: [
  //         {
  //           title: 'Habit Tracker',
  //           body: `A daily record of major factors of sleep (e.g. meal times, exercise, stress levels) to determine which combination of habits result in the best sleep for the individual`,
  //           weight: 3,
  //         },
  //         {
  //           title: 'Sleep Decision Making Tool',
  //           body: `A machine learning model that predicts how an evening activity will affect an individuals sleep, and allows them to make informed decisions`,
  //           weight: 3,
  //         },
  //         {
  //           title: 'Interruptibility',
  //           body: `An algorithm that determines how receptive one is to receive a notification based on phone usage (e.g. checking another notficiation, extensive use of social app)`,
  //           weight: 3,
  //         },
  //         {
  //           title: 'Contextual Reminders',
  //           body: `A notification that gives a recommendation based on the time and location of the individual (e.g. if at a coffee shop past 3 pm, will remind them to buy decaf)`,
  //           weight: 3,
  //         },
  //       ]
  //     },
  //     { type: 'title',
  //       data: 'Approach'
  //     },
  //     { type: 'text columns',
  //       data: [
  //         {
  //           title: 'Beta Testing',
  //           body: `28 college students participated in a semester long study. In the first 2 weeks, they only used a Fitbit to record their sleep data. Afterwards, they were assigned to either visit a health specialist who provided them with a sleep assessment and consulation, or used SleepU. After a month of the first condition, participants were assigned to the other conditions for another month.\n* Everyday, participants filled out a "Sleep Diary" where they logged habits that contribute to sleep\n* Before and after each phase (4 times total), participants filled out a questionnaire that acccessed their sleep practices and other habits`,
  //           weight: 6,
  //         },
  //         {
  //           title: 'Semi-structured Interview',
  //           body: `Interviewed half the participants from prior study and asked about their sleep during the semester.\n* Compared their sleep to other semesters, identified external factors beyond the study (e.g. class workload)\n* Discussed what factors they think affect their sleep, and any changes they made in their habit\n* Compared the two conditions: sleep appointment and using SleepU\n* Recounted their experience with SleepU; which recommendations they were following, and which weren't useful/ relevant`,
  //           weight: 6,
  //         },
  //         {
  //           title: 'Affinity Diagram',
  //           body: `Transcribed 13 interviews and grouped similar quotes to find common themes. We found:\n* Overall, using SleepU was as effective, or better than visiting a health specialist\n* Participants found the recommendations and habit tracking to be helpful; they became more conscious of factors that affect their sleep (e.g. many established a bedtime routine)\n* Many expressed that recommendations got repetivitive after a while. This was because after the model determined which habits work best for the individual, it would recommend the same ones to ensure that they were being followed. There is a need for people to mark which habits they reguarly practice without the help of the app, so that SleepU can recommend new ones.\n* Participants also shared that they wanted to learn more about sleep in general, and why specific recommendations improve sleep`,
  //         }
  //       ]
  //     },
  //     { type: 'image',
  //       data: {
  //         src: '/assets/portfolio/sleepU_storyboard.webp',
  //         alt: 'sleepU Storyboard',
  //       }
  //     },
  //     { type: 'text columns',
  //       data: [
  //         {
  //           title: 'Storyboard',
  //           body: `Brainstormed ways we can improve SleepU based on user needs identified and specific feedback we received from participants during the interview. Ideas centered around two types of interactions:\n* App to person (storyboards 2, 3, 4): Make recommendations more specific and actionable (e.g. contextual reminders through the use phone data, time, and location)\n* Person to app (storyboards 1, 5, 6): Visualize/ explain how actions affect sleep, help individuals make good decisions for their sleep (e.g. decision making tool, habit tracker)`,
  //           weight: 4,
  //           midWeight: 12,
  //         },
  //         {
  //           title: 'Speed Dating',
  //           body: `Interviewed 8 new individuals; learned if people could relate to scenarios and if there was an actual need for the solution. Key findings:\n* Storyboard 2: People know that it's important to have a consistent sleep schedule, but aren't always able to go to sleep when they want because they are finishing up work. In this case, a reminder from SleepU wouldn't be helpful\n* Storyboards 3 and 4 were liked better, since it's regarding something the individual has control over and preventing bad choices\n* Storyboard 5: Logging habits takes effort, and inputing data would depend on how motivated they are to improve their sleep\n* Storyboard 6: Depending on the importance of the morning plan, usage of decision tool would differ (e.g. if high stakes, would still stay in for mental preperation)`,
  //           weight: 8,
  //           midWeight: 12,
  //         },
  //       ]
  //     },
  //     { type: 'image row',
  //       data: [
  //         {
  //           src: '/assets/portfolio/sleepU_comic_1.webp',
  //           alt: 'sleepU Comic 1',
  //           weight: 4,
  //           midWeight: 6,
  //         },
  //         {
  //           src: '/assets/portfolio/sleepU_comic_2.webp',
  //           alt: 'sleepU Comic 2',
  //           weight: 4,
  //           midWeight: 6,
  //         },
  //         {
  //           src: '/assets/portfolio/sleepU_comic_3.webp',
  //           alt: 'sleepU Comic 3',
  //           weight: 4,
  //           midWeight: 6,
  //         },
  //         {
  //           src: '/assets/portfolio/sleepU_comic_4.webp',
  //           alt: 'sleepU Comic 4',
  //           weight: 4,
  //           midWeight: 6,
  //         },
  //         {
  //           src: '/assets/portfolio/sleepU_comic_5.webp',
  //           alt: 'sleepU Comic 5',
  //           weight: 4,
  //           midWeight: 6,
  //         },
  //         {
  //           src: '/assets/portfolio/sleepU_comic_6.webp',
  //           alt: 'sleepU Comic 6',
  //           weight: 4,
  //           midWeight: 6,
  //         },
  //       ],
  //     },
  //     { type: 'text columns',
  //       data: [
  //         {
  //           title: 'Interface Design',
  //           body: `A simple interface design for the home page, which will display the recommendations for the day`,
  //         },
  //       ]
  //     },
  //     { type: 'image row',
  //       data: [
  //         {
  //           src: '/assets/portfolio/sleepU_mobile_1.webp',
  //           alt: 'sleepU Mobile Slide 1',
  //           weight: 3,
  //         },
  //         {
  //           src: '/assets/portfolio/sleepU_mobile_2.webp',
  //           alt: 'sleepU Mobile Slide 2',
  //           weight: 3,
  //         },{
  //           src: '/assets/portfolio/sleepU_mobile_3.webp',
  //           alt: 'sleepU Mobile Slide 3',
  //           weight: 3,
  //         },{
  //           src: '/assets/portfolio/sleepU_mobile_4.webp',
  //           alt: 'sleepU Mobile Slide 4',
  //           weight: 3,
  //         },
  //       ],
  //     },
  //     { type: 'title',
  //       data: 'Design Conference'
  //     },
  //     { type: 'body',
  //       data: `In August 2019, we submitted our project to the [Health x Design](https://centerhxd.com/collaborations/projects/health-x-design-building-health-into-everyday-life/): *Building Health into Everyday Life* Design Challenge. For the submission, I created a 3 minute video describing our project, from the importance of our work and the functionality of SleepU.`
  //     },
  //     { type: 'video',
  //       data: {
  //         src: 'https://www.youtube.com/embed/YVGc2D4oShU',
  //         title: 'Sleep U Demo',
  //         allowFullScreen: true,
  //       }
  //     },
  //     { type: 'padding'
  //     },
  //   ]
  // },
  { name: 'Aerial Metrics',
    description: 'Redesign & implement a website',
    jobs: ['UX Designer', 'Front-End Engineer'],
    tileImage: {
      uri: '/assets/portfolio/aerial_metrics.webp',
      alt: 'Aerial Metrics Blog Tile',
    },
    heroImage: {
      uri: '/assets/portfolio/aerial_metrics_cover.webp',
      alt: 'Aerial Metrics App Screenshot',
      height: 300,
    },
    pathname: '/portfolio/aerial_metrics',
    isPasswordProtected: false,
    blog: [
      { type: 'title',
        data: 'Overview',
      },
      { type: 'text columns',
        data: [
          {
            title: 'Client & Duration',
            body: `[Aerial Metrics](https://www.aerial-metrics.com/),
            August 2020 - August 2021`,
            weight: 3,
            midWeight: 12,
          },
          {
            title: 'Primary Role',
            body: `UX Designer: *work with the client to reassess the sitemap of the website, design wireframes, and create visuals*
            Front-End Engineer: *Implement the designs using Bootstrap and Drupal (a framework already used by the client)*`,
            weight: 9,
            midWeight: 12,
          },
        ]
      },
      { type: 'body',
        data: `Aerial Metrics helps public safety agencies (e.g. police departments) to explore the use of small unmanned aerial systems (sUAS) to improve operational capability (e.g. when applied to crash investigation, sUAS reduces road closure times and captures better evidence at crash scenes). Their goal is to provide the support, training, resources, and community that will benefit agencies to improve their services through the use of sUAS.`
      },
      { type: 'title',
        data: 'Initial Website'
      },
      { type: 'body',
        data: `I was connected to one of the founders of Aerial Metrics to help redesign and develop their website, which hadn't been updated since the company's launch in 2015. Below are a few screenshots of the website before the redesign-- overall, although it is very informative, it is text-heavy and overloads individuals with information:`
      },
      { type: 'image columns 2',
        data: [
          [
            {
              src: '/assets/portfolio/aerial_metrics_initial_1.webp',
              alt: 'Aerial Metrics Initial 1',
            },
            {
              src: '/assets/portfolio/aerial_metrics_initial_2.webp',
              alt: 'Aerial Metrics Initial 2',
            },
            {
              src: '/assets/portfolio/aerial_metrics_initial_3.webp',
              alt: 'Aerial Metrics Initial 3',
            },
          ],
          [
            {
              src: '/assets/portfolio/aerial_metrics_initial_4.webp',
              alt: 'Aerial Metrics Initial 4',
            },
          ],
        ],
      },
      { type: 'title',
        data: 'Final Product'
      },
      { type: 'body',
        data: `When redesigning, I attempted to make each page as visual as possible. In addition to adding photos and icons, I structured content in a way that parsed information and incorporated as much white spaces as possible. Below are screenshots of the same pages displayed above, this time after the redesign:`
      },
      { type: 'image columns 2',
        data: [
          [
            {
              src: '/assets/portfolio/aerial_metrics_final_1.webp',
              alt: 'Aerial Metrics Final 1',
            },
            {
              src: '/assets/portfolio/aerial_metrics_final_2.webp',
              alt: 'Aerial Metrics Final 2',
            },
            {
              src: '/assets/portfolio/aerial_metrics_final_3.webp',
              alt: 'Aerial Metrics Final 3',
            },
          ],
          [
            {
              src: '/assets/portfolio/aerial_metrics_final_4.webp',
              alt: 'Aerial Metrics Final 4',
            },
          ],
        ],
      },
      { type: 'title',
        data: 'Approach'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Evaluation of Site Map',
            body: `The first step I took to redesigning the website was to learn who would be using this site and what their needs would be. I was able to construct common user flows based on how people often come across the site and which pages are most frequently visited. After understanding the average individual and their interaction with the site, I analyzed the current structure of the site by observing how information was distributed throughout the website. The following are the major changes I wanted to make:\n* Take advantage of the home page more to 1) inform people of the company's services and 2) direct them to pages with said services\n* Reduce the overall number of pages-- every link the individual has to click should be considered a barrier for obtaining their goal. That said, I must beware of combining too much information and overwhelming customers\n* Convey information in non-paragraph form as much as possible, to visually parse content in a format that is easy for the individual to digest`,
          },
        ]
      },
      { type: 'body',
        data: `Below are site maps of the original website (left) and redesigned website (right). I was able to rid of 6 pages and create more connections between pages`
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_site_map_before.webp',
            alt: 'Aerial Metrics Site Map Before',
            weight: 6,
          },
          {
            src: '/assets/portfolio/aerial_metrics_site_map_after.webp',
            alt: 'Aerial Metrics Site Map After',
            weight: 6,
          },
        ],
      },
      { type: 'title',
        data: 'Design Iterations'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Home page',
            body: `Below is the home page of the original site. Although the imagery perfectly illustrates the industry Aerial Metrics is in, no other information is given about the services they provide. The only use for the original landing page is to direct people to the page that discusses the benefits of using sUAS.`,
          },
        ]
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/aerial_metrics_initial_1.webp',
          alt: 'Aerial Metrics Initial 1',
          body: `When approaching the redesign of this page, I wanted ensure that people would know what Aerial Metrics does, and why their work is important just by looking at the home page. This was achieved by:\n* Cover slideshow displays all the different services Aerial Metrics provides, with corresponding links to their pages\n* Body provides reasoning why sUAS is useful, and what use cases it can be applied to\n* Reiteration of the sale of Pix4Dmapper, which is the main source of interest for most customers`,
        }
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_home_1.webp',
            alt: 'Aerial Metrics Home 1',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_home_2.webp',
            alt: 'Aerial Metrics Home 2',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_home_3.webp',
            alt: 'Aerial Metrics Home 3',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_home_4.webp',
            alt: 'Aerial Metrics Home 4',
            weight: 3,
          },
        ],
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/aerial_metrics_elapsed.webp',
          alt: 'Aerial Metrics Reduce Elapsed Time',
          body: `In the above wireframes, I explore two different designs for A) benefits of utilizing sUAS and B) types of use cases of the technology. For A, I liked that you could see all three benefits at once, but felt that the explainations were too important to hide away. Therefore, I designed the slideshow to the left, which still lists all benefits of sUAS but takes the real estate to clearly explain the reason (instead of filling it up with icons). For B, it was decided that the first design with just 4 missions would be better and that SWAT, Fire, and Search & Rescue should be grouped under Emergency Response to minimize parsing content.`,
        }
      },
      { type: 'text columns',
        data: [
          {
            title: 'Mission page',
            body: `Below are four pages from the original website that communicate the benefits, challenges, performance analysis, and case studies of using sUAS to investigate crash sites. All of this information is beneficial, especially for an agency that is determining whether or not to invest in the technology, but the information is dispersed into 4 pages, 3 of which the individual has to find from the navigation bar.`,
          },
        ]
      },
      { type: 'image columns 2',
        data: [
          [
            {
              src: '/assets/portfolio/aerial_metrics_initial_4.webp',
              alt: 'Aerial Metrics Initial 4',
            },
            {
              src: '/assets/portfolio/aerial_metrics_initial_4b.webp',
              alt: 'Aerial Metrics Initial 4b',
            },
          ],
          [
            {
              src: '/assets/portfolio/aerial_metrics_initial_4a.webp',
              alt: 'Aerial Metrics Initial 4a',
            },
            {
              src: '/assets/portfolio/aerial_metrics_initial_4c.webp',
              alt: 'Aerial Metrics Initial 4c',
            },
          ],
        ],
      },
      { type: 'text columns',
        data: [
          {
            title: 'In the redesign, I modified the site in following ways:',
            body: `* Condensed all information into one page, with the benefits, challenges, performance analysis in the body of the page. Case studies are shown on a side bar where each case can be expanded to show the full details of the accident\n* General benefits to using sUAS (e.g. "Richer Data Capture") were moved to the home page since they were applicable to other missions, not just crash investigation`,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_mission_1.webp',
            alt: 'Aerial Metrics Mission 1',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_mission_2.webp',
            alt: 'Aerial Metrics Mission 2',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_mission_3.webp',
            alt: 'Aerial Metrics Mission 3',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_mission_4.webp',
            alt: 'Aerial Metrics Mission 4',
            weight: 3,
          },
        ],
      },
      { type: 'text columns',
        data: [
          {
            title: 'Service pages',
            body: `One of the services Aerial Metrics provides is consulting with agencies to help them determine if sUAS is the right fit for them. Below is the redesign of the page that showcases this service, where I visualized the list of questions agencies should consider when making the decision. The cards allow agencies to quickly overview all the different factors, and click on individual factors to flip the card and view the question associated with it.`,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_initial_2.webp',
            alt: 'Aerial Metrics Initial 2',
            weight: 6,
          },
          {
            src: '/assets/portfolio/aerial_metrics_service_1.webp',
            alt: 'Aerial Metrics Service 1',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_service_2.webp',
            alt: 'Aerial Metrics Service 2',
            weight: 3,
          },

        ],
      },
      { type: 'body',
        data: `Aerial Metrics also provides training on various aspects of utilizing sUAS. On the original website, these classes are each presented on separate pages, which makes it hard for individuals to compare the classes and determine which would be the best fit for them.`
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_initial_classes_1.webp',
            alt: 'Aerial Metrics Initial Classes 1',
            weight: 4,
          },
          {
            src: '/assets/portfolio/aerial_metrics_initial_classes_2.webp',
            alt: 'Aerial Metrics Initial Classes 2',
            weight: 4,
          },
          {
            src: '/assets/portfolio/aerial_metrics_initial_classes_3.webp',
            alt: 'Aerial Metrics Initial Classes 3',
            weight: 4,
          },
        ],
      },
      { type: 'body',
        data: `The redesign changed the site in the following ways:\n* Display all the training classes on one page, and only communicate information that's necessary to determine whether or not the class will be beneficial for the individual (i.e. course content, targeted audience)\n* Include option to customize the curriculum, for those who wish to take more than one class\n* Full details (e.g. class length, class size, and specific objectives of the class) can be accessed by clicking on a button which will open a pdf in a new tab that looks similar to the original training page`
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_service_3.webp',
            alt: 'Aerial Metrics Service 3',
            weight: 6,
          },
          {
            src: '/assets/portfolio/aerial_metrics_service_4.webp',
            alt: 'Aerial Metrics Service 4',
            weight: 6,
          },
        ],
      },
      { type: 'body',
        data: `The last service Aerial Metrics provides is analyzing scenes that have already been captured. In the redesign, I simplified the steps and formatted them in column form for easy consumption`
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_initial_3.webp',
            alt: 'Aerial Metrics Initial 3',
            weight: 6,
          },
          {
            src: '/assets/portfolio/aerial_metrics_service_5.webp',
            alt: 'Aerial Metrics Service 5',
            weight: 6,
          },
        ],
      },
      { type: 'text columns',
        data: [
          {
            title: 'Product pages',
            body: `Pix4D mapper is one of the main attractions of Aerial Metrics-- below is the redesign of the page that offers the software, which has been modified to resemble a traditional Ecommerce site.\n* Display license options in card format, for convenient side-by-side comparison\n* Emphasize the additional software customers receive upon purchasing Pix4Dmapper from Aerial Metrics\n* Explore different ways to showcase other Pix4D software, from grid format to carousel`,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_initial_5.webp',
            alt: 'Aerial Metrics Initial 5',
            weight: 6,
          },
          {
            src: '/assets/portfolio/aerial_metrics_software_1.webp',
            alt: 'Aerial Metrics Software 1',
            weight: 6,
          },
        ],
      },
      { type: 'body',
        data: `Aerial Metrics has developed 2 softwares that complement Pix4Dmapper. One (Maptools) is available for purchase or can be received for free with the purchase of Pix4Dmapper, and the other (DJI Mavic 2) is available for free download.`
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_initial_5b.webp',
            alt: 'Aerial Metrics Initial 5b',
            weight: 6,
          },
          {
            src: '/assets/portfolio/aerial_metrics_initial_5a.webp',
            alt: 'Aerial Metrics Initial 5a',
            weight: 6,
          },
        ],
      },
      { type: 'body',
        data: `The site was modified in the following ways in the redesign:\n* Combined the two pages into one, to present both softwares by Aerial Metrics at once\n* Arranged the description, video demonstration, and requirements of Maptools in tab format, similar to the slideshow on the home page that communicated the benefits of sUAS\n* Utilized the same card design as Pix4D license options\n* Explored different ways to communicate that Maptools is available with the purchase of Pix4D from Aerial Metrics, as below`
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/aerial_metrics_software_p.webp',
          alt: 'Aerial Metrics Software P',
        }
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_software_cd.webp',
            alt: 'Aerial Metrics Software CD',
            weight: 4,
          },
          {
            src: '/assets/portfolio/aerial_metrics_software_cv.webp',
            alt: 'Aerial Metrics Software CV',
            weight: 4,
          },
          {
            src: '/assets/portfolio/aerial_metrics_software_cr.webp',
            alt: 'Aerial Metrics Software CR',
            weight: 4,
          },
        ],
      },
      { type: 'text columns',
        data: [
          {
            title: 'Color Schemes',
            body: `I explored several color schemes for Aerial Metrics by pulling inspiration from law enforcement (e.g. Axon's black and yellow, Galls' blue and red) and drone industry (e.g. Pix4D's green and blue, DJI's gray and blue).`,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/aerial_metrics_color_1.webp',
            alt: 'Aerial Metrics Color 1',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_color_2.webp',
            alt: 'Aerial Metrics Color 2',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_color_3.webp',
            alt: 'Aerial Metrics Color 3',
            weight: 3,
          },
          {
            src: '/assets/portfolio/aerial_metrics_color_4.webp',
            alt: 'Aerial Metrics Color 4',
            weight: 3,
          },
        ],
      },
      { type: 'padding'
      },
    ],
  },
  { name: 'sleepU',
    description: 'Leverage AI for personalization',
    jobs: ['User Researcher'],
    tileImage: {
      uri: '/assets/portfolio/sleepU.webp',
      alt: 'sleepU Blog Tile',
    },
    heroImage: {
      uri: '/assets/portfolio/sleepU_cover.webp',
      alt: 'SleepU App Screenshot',
      height: 300,
    },
    pathname: '/portfolio/sleepu',
    isPasswordProtected: false,
    blog: [
      { type: 'title',
        data: 'Overview'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Lab & Duration',
            body: `[Smart Sensing for Humans Lab](http://smashlab.io/),
            January 2019 - August 2020`,
            weight: 3,
          },
          {
            title: 'Team',
            body: `Julian Ramos *PhD Candidate*, Carolyn Zhong *Designer*`,
            weight: 3,
          },
          {
            title: 'Primary Role',
            body: `User Researcher: *recruited participants, conducted research sessions, lead synthesis activities*
            Video Editor: *created a project overview video for a design conference*`,
            weight: 6,
          },
        ]
      },
      { type: 'title',
        data: 'Challenge'
      },
      { type: 'text columns',
        data: [
          {
            title: 'How might we utilize data to help people improve their daily habits, sleep habits, and sleep quality?',
            body: `Although sleep is essential for a person's health and wellbeing, research conducted by the NSF has shown that tens of millions of people are sleep deprived. Over the years, the number of sleep-tracking products have grown, but none of them help people understand how to improve their sleep. There is a need for a tool that goes beyond the generic tip of "minimize caffine intake" and "reduce blue light before bed", and help each individual understand what specific habits benefit their sleep.`,
          },
        ]
      },
      { type: 'title',
        data: 'The Project'
      },
      { type: 'body',
        data: `SleepU is a sleep-intervention app that uses Fitbit data and user-inputed trackings to provide personal sleep recommendations. These help users adjust their daily behaviors and sleep environment to optimize their sleep quality.`
      },
      { type: 'body',
        data: `It accomplishes this with four features:`
      },
      { type: 'text columns',
        data: [
          {
            title: 'Habit Tracker',
            body: `A daily record of major factors of sleep (e.g. meal times, exercise, stress levels) to determine which combination of habits result in the best sleep for the individual`,
            weight: 3,
          },
          {
            title: 'Sleep Decision Making Tool',
            body: `A machine learning model that predicts how an evening activity will affect an individuals sleep, and allows them to make informed decisions`,
            weight: 3,
          },
          {
            title: 'Interruptibility Model',
            body: `An algorithm that determines how receptive one is to receive a notification based on phone usage (e.g. checking another notficiation, extensive use of social app)`,
            weight: 3,
          },
          {
            title: 'Contextual Reminders',
            body: `A notification that gives a recommendation based on the time and location of the individual (e.g. if at a coffee shop past 3 pm, will remind them to buy decaf)`,
            weight: 3,
          },
        ]
      },
      { type: 'title',
        data: 'Approach'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Beta Testing',
            body: `28 college students participated in a semester long study. In the first 2 weeks, they only used a Fitbit to record their sleep data. Afterwards, they were assigned to either visit a health specialist who provided them with a sleep assessment and consulation, or used SleepU. After a month of the first condition, participants were assigned to the other conditions for another month.\n* Everyday, participants filled out a "Sleep Diary" where they logged habits that contribute to sleep\n* Before and after each phase (4 times total), participants filled out a questionnaire that acccessed their sleep practices and other habits`,
            weight: 6,
          },
          {
            title: 'Semi-structured Interview',
            body: `Interviewed half the participants from prior study and asked about their sleep during the semester.\n* Compared their sleep to other semesters, identified external factors beyond the study (e.g. class workload)\n* Discussed what factors they think affect their sleep, and any changes they made in their habit\n* Compared the two conditions: sleep appointment and using SleepU\n* Recounted their experience with SleepU; which recommendations they were following, and which weren't useful/ relevant`,
            weight: 6,
          },
          {
            title: 'Affinity Diagram',
            body: `Transcribed 13 interviews and grouped similar quotes to find common themes. We found:\n* Overall, using SleepU was as effective, or better than visiting a health specialist\n* Participants found the recommendations and habit tracking to be helpful; they became more conscious of factors that affect their sleep (e.g. many established a bedtime routine)\n* Many expressed that recommendations got repetivitive after a while. This was because after the model determined which habits work best for the individual, it would recommend the same ones to ensure that they were being followed. There is a need for people to mark which habits they reguarly practice without the help of the app, so that SleepU can recommend new ones.\n* Participants also shared that they wanted to learn more about sleep in general, and why specific recommendations improve sleep`,
          }
        ]
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/sleepU_storyboard.webp',
          alt: 'sleepU Storyboard',
        }
      },
      { type: 'text columns',
        data: [
          {
            title: 'Storyboard',
            body: `Brainstormed ways we can improve SleepU based on user needs identified and specific feedback we received from participants during the interview. Ideas centered around two types of interactions:\n* App to person (storyboards 2, 3, 4): Make recommendations more specific and actionable (e.g. contextual reminders through the use phone data, time, and location)\n* Person to app (storyboards 1, 5, 6): Visualize/ explain how actions affect sleep, help individuals make good decisions for their sleep (e.g. decision making tool, habit tracker)`,
            weight: 4,
            midWeight: 12,
          },
          {
            title: 'Speed Dating',
            body: `Interviewed 8 new individuals; learned if people could relate to scenarios and if there was an actual need for the solution. Key findings:\n* Storyboard 2: People know that it's important to have a consistent sleep schedule, but aren't always able to go to sleep when they want because they are finishing up work. In this case, a reminder from SleepU wouldn't be helpful\n* Storyboards 3 and 4 were liked better, since it's regarding something the individual has control over and preventing bad choices\n* Storyboard 5: Logging habits takes effort, and inputing data would depend on how motivated they are to improve their sleep\n* Storyboard 6: Depending on the importance of the morning plan, usage of decision tool would differ (e.g. if high stakes, would still stay in for mental preperation)`,
            weight: 8,
            midWeight: 12,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/sleepU_comic_1.webp',
            alt: 'sleepU Comic 1',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_2.webp',
            alt: 'sleepU Comic 2',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_3.webp',
            alt: 'sleepU Comic 3',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_4.webp',
            alt: 'sleepU Comic 4',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_5.webp',
            alt: 'sleepU Comic 5',
            weight: 4,
            midWeight: 6,
          },
          {
            src: '/assets/portfolio/sleepU_comic_6.webp',
            alt: 'sleepU Comic 6',
            weight: 4,
            midWeight: 6,
          },
        ],
      },
      { type: 'text columns',
        data: [
          {
            title: 'Interface Design',
            body: `A simple interface design for the home page, which will display the recommendations for the day`,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/sleepU_mobile_1.webp',
            alt: 'sleepU Mobile Slide 1',
            weight: 3,
          },
          {
            src: '/assets/portfolio/sleepU_mobile_2.webp',
            alt: 'sleepU Mobile Slide 2',
            weight: 3,
          },{
            src: '/assets/portfolio/sleepU_mobile_3.webp',
            alt: 'sleepU Mobile Slide 3',
            weight: 3,
          },{
            src: '/assets/portfolio/sleepU_mobile_4.webp',
            alt: 'sleepU Mobile Slide 4',
            weight: 3,
          },
        ],
      },
      { type: 'title',
        data: 'Design Conference'
      },
      { type: 'body',
        data: `In August 2019, we submitted our project to the [Health x Design](https://centerhxd.com/collaborations/projects/health-x-design-building-health-into-everyday-life/): *Building Health into Everyday Life* Design Challenge. For the submission, I created a 3 minute video describing our project, from the importance of our work and the functionality of SleepU.`
      },
      { type: 'video',
        data: {
          src: 'https://www.youtube.com/embed/YVGc2D4oShU',
          title: 'Sleep U Demo',
          allowFullScreen: true,
        }
      },
      { type: 'padding'
      },
    ]
  },
  { name: 'Render',
    description: 'Streamline communication',
    jobs: ['Product Manager', 'UX Designer'],
    tileImage: {
      uri: '/assets/portfolio/render.webp',
      alt: 'Render Blog Tile',
    },
    heroImage: {
      uri: '/assets/portfolio/render_cover.webp',
      alt: 'Render App Screenshot',
      height: 300,
    },
    pathname: '/portfolio/render',
    isPasswordProtected: false,
    blog: [
      { type: 'title',
        data: 'Overview',
      },
      { type: 'text columns',
        data: [
          {
            title: `Client & Duration`,
            body: `[Pennsylvania Prison Society](https://www.prisonsociety.org/),
            January 2020 - May 2020`,
            weight: 3,
          },
          {
            title: `Collaborators`,
            body: `Elliot Allard, Jiayi Zhao, Jennifer Kong, Zoe Lin`,
            weight: 3,
          },
          {
            title: `Roles`,
            body: `Product Manager: *Point of contact for the client, advisor, and teammates* 
            UX Designer: *Created and iterated on prototypes; focused on interactions*`,
            weight: 6,
          }
        ]
      },
      { type: 'body',
        data: `Pennsylvania Prison Society (PPS) is a non-profit that advocates for incarcerated individuals by hearing their concerns/ problems (via "requests") and communicating their needs to the Warden. We were asked to help PPS in the development of a workflow system to be utilized by over 250+ Official Volunteers (OVs) across the state.`,
      },
      { type: 'padding',
      },
      { type: 'title',
        data: 'Challenge'
      },
      { type: 'text columns',
        data: [
          {
            title: 'How might we streamline communication between the central office and regional chapters to increase transparency?',
            body: `The organization has 43 chapters throughout Pennsylvania, and each functions differently due to various factors such as size of the chapter, number of requests, and relationship with the prison. Because of this, there isn't a standardized way for the central office to receive regular updates from individual chapters which hinders the organization from recognizing their impact as a whole.`,
          }
        ]
      },
      { type: 'padding',
      },
      { type: 'title',
        data: 'Solution'
      },
      { type: 'body',
        data: `Render is a web-based request managing system where requests can be uploaded and delegated to OVs, updated with actionable items post-visit, and analyzed to identify common problems and trends. To make visit reports as convenient as possible, we also propose that an Interactive Voice Response (IVR) be created.`,
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/render_report.gif',
          alt: 'Render Gif',
        }
      },
      { type: 'body',
        data: `It is designed on four central ideas:`,
      },
      { type: 'text columns',
        data: [
          {
            title: 'Central Hub',
            body: `A system that allows documents to be easily shared and accessed by chapters and the central office`,
            weight: 3,
          },
          {
            title: 'Access Levels',
            body: `A required log in that indicates which features & information are relevant to the individual, based on their role in the organization`,
            weight: 3,
          },
          {
            title: 'Request Analysis',
            body: `A summary of the type of requests the organization receives to notice trends of problems across the state to tackle systemic issues`,
            weight: 3,
          },
          {
            title: 'Minimalist Interface',
            body: `A clean and simple design that is straightforward for anyone to use, especially those who aren't well experienced with technology`,
            weight: 3,
          },
        ],
      },
      { type: 'padding',
      },
      { type: 'title',
        data: 'Approach',
      },
      { type: 'text columns',
        data: [
          {
            title: 'Semi-Structured Interview',
            body: `Learned how the organization functions, from the role of different stakeholders and the intake of requests\n* Spoke to the Prison Monitoring Director and Director of Volunteers (also formerly incarcerated)\n* Created a stakeholder map with color-coded relations to represent the different methods of communication`,
            weight: 6,
          },
          {
            title: 'Stakeholder Map',
            body: `Synthesized information and visually represented the interactions between stakeholders, and identified pain points:\n* Too many channels and methods of receiving requests (can't be helped)\n* Results in requests getting lost due to numerous redirects\n* Reporting request updates is confusing/complex, not always clear who to send it to`,
            weight: 6,
          }
        ]
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/render_flow_chart.webp',
          alt: 'Render Flow Chart',
        }
      },
      { type: 'text columns',
        data: [
          {
            title: 'Contextual Inquiry',
            body: `Shadowed OVs on their visit to a prison and observed a chapter meeting. Key insights include:\n* There are two ways of delegating requests: based on the type of request, a volunteer of a specific demographic (e.g. profession, gender) will be assigned vs whoever has the capacity and can quickly address it\n* OVs heavily rely on memory when discussing previous similar requests and their consequences, request history of a specific inmate, etc`,
            weight: 6,
          },
          {
            title: 'User Journey Map',
            body: `Focused on the experiences of an OV and the prosses they go through when they are assigned to address a request. Identified more pain points:\n* The prison restricts OVs from bringing any objects into the facility, which prohibits note-taking\n* There isn't a database that can be used as a resource to look up relevant requests\n* There isn't a standard report format, so OVs don't know what information to include`,
            weight: 6,
          }
        ]
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/render_journey_map.webp',
          alt: 'Render Journey Map',
        }
      },
      { type: 'text columns',
        data: [
          {
            title: 'Crazy 8',
            body: `Brainstormed 8 possible solutions in 8 minutes to quickly ideate features and systems. Ideas were centered around:\n* Analysis: the ability to filter through requests and analyze them and find insights and statistics\n* Unification: documenting all intake and assignment of requests, and reports of visitiations\n* Efficiency: simplify and standardize reporting, to make it as convinent as possible`,
            weight: 6,
          },
          {
            title: 'Speed Dating',
            body: `Created storyboards and asked participants to envision using the proposed tool in given scenario. Recorded their thoughts:\n* Ran sessions with the Prison Monitoring Director (forwards requests to specific chapters) and 4 OVs\n* Received feedback that some individuals would wish to remain anonymous because some requests are very private matters\n* Need to handle requests that are informational, and don't require a visitation
            `,
            weight: 6,
          },
        ]
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/render_comic_strip.webp',
          alt: 'Render Comic Strip',
        }
      },
      { type: 'text columns',
        data: [
          {
            title: 'Initial Design',
            body: `For the low fidelity design, we focused on the experiences of a chapter convener and created web-based database for conveners to upload, assign, and update requests`,
          },
        ]
      },
      { type: 'image columns 2',
        data: [
          [
            {
              src: '/assets/portfolio/render_designs_1.webp',
              alt: 'Render Designs 1',
            },
          ],
          [
            {
              src: '/assets/portfolio/render_designs_2.webp',
              alt: 'Render Designs 2',
            },
          ],
        ],
      },
      { type: 'body',
        data: `**Home page:** prioritized displaying the tasks of a convener to allow them to easily navigate through their task; also included a dashboard of statistics on the bottom which can be expanded to display data`
      },
      { type: 'image columns 2',
        data: [
          [
            {
              src: '/assets/portfolio/render_designs_3.webp',
              alt: 'Render Designs 3',
              body: `**Request list page:** organized request information in table format, with color coding to help categorize the progress of each request`,
            },
          ],
          [
            {
              src: '/assets/portfolio/render_designs_4.webp',
              alt: 'Render Designs 4',
              body: `**Upload request page:** form to upload a request into the system-- can upload the original request letter from the incarcerated to let the system parse the text from the photo, or can manually input the information`,
            },
          ],
        ],
      },
      { type: 'image columns 2',
        data: [
          [
            {
              src: '/assets/portfolio/render_designs_5.webp',
              alt: 'Render Designs 5',
              body: `**Assign request page:** to assist conveners in delegating the request to the most competent volunteer, included the specialties of each volunteer, in addition to the current number of requests already assigned to them`,
            },
          ],
          [
            {
              src: '/assets/portfolio/render_designs_6.webp',
              alt: 'Render Designs 6',
              body: `**Upload report page:** form to update the request with information gathered from visitation, includes the date of visit and whether the incarcerated wishes to remain anonymous for the record`,
            },
          ],
        ],
      },
      { type: 'padding'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Think Aloud Protocol',
            body: `Determined the usability of the web interface by asking 3 Conveners to perform tasks (1. upload a report, 2. complete a request, 3. assign a request to an OV). Learned the following:\n* It's confusing to have both "Upload Report" and "Complete Request" since they both update the request, the only difference is whether or not the request gets archived afterwards\n* Finding a specific request to update was time-consuming because the Request List isn't organized and all requests, even those that have been completed, are shown\n* Several participants expressed that they want a confirmation from the Central Office that they have seen the report`,
            weight: 6,
          },
          {
            title: 'Wizard of Oz',
            body: `Created a script and simulated an Interactive Voice Response for OVs to report via phone call\n* 3 OVs were asked to act like they were interacting with a voicemail system to report a visit\n* Participants seemed annoyed of the pace of the questions; decided to combine short questions to reduce the number of confirmation of answers\n* OVs would share all information at once and would later have to repeat themselves when the report came to that section; reorganized the order to have more general questions (e.g. next steps) in the front and then put shorter/ logistical questions at end (e.g. request type)`,
            weight: 6,
          }
        ]
      },
      { type: 'image',
        data: {
          src: '/assets/portfolio/render_wizard_chat.webp',
          alt: 'Render Wizard Chat',
        }
      },
      { type: 'padding'
      },
      { type: 'text columns',
        data: [
          {
            title: 'Final Design',
            body: `For the high fidelity design, we changed the focus of our user to OVs because they are the majority of our users (250+) and the most technologically challenged group (80% are OVs above 75). The designs focused more on receiving and updating requests. Made the following modifications:\n* Combined "Upload Report" and "Complete Request" into one action and indicated active and archived requests with different colors\n* Decluttered the Request List to only contain active requests, and added an option for OVs to upload their own request for cases when they directly receive a request from an incarcerated individual who they have an established relationship with\n* Created "Past Requests" where OVs can filter through completed requests and added column that indicates when the Central Office has seen the report, to assure OVs the value of their work`,
          },
        ]
      },
      { type: 'image row',
        data: [
          {
            src: '/assets/portfolio/render_final_1.webp',
            alt: 'Render Final Design 1',
            weight: 6,
          },
          {
            src: '/assets/portfolio/render_final_2.webp',
            alt: 'Render Final Design 2',
            weight: 6,
          },
          {
            src: '/assets/portfolio/render_final_3.webp',
            alt: 'Render Final Design 3',
            weight: 6,
          },
          {
            src: '/assets/portfolio/render_final_4.webp',
            alt: 'Render Final Design 4',
            weight: 6,
          }
        ]
      },
      { type: 'padding'
      },
    ]
  },
];

export default blogEntries;