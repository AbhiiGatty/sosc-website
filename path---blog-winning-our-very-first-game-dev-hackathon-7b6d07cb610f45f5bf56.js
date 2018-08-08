webpackJsonp([0x64c05f4f6626],{348:function(e,t){e.exports={data:{markdownRemark:{html:"<h2>GameJam 2018</h2>\n<p>Winning a game development hackathon is hard, especially when creativity is a core requirement to get your project to the top. Hackathon's are events where you as a developer can meet a lot of other interesting people working on stuffs that you are interested, a really good opportunity to socialize, and get to know what you are lacking behind in the fast growing IT fie... (Look! There a new JS framework out!) just kidding 😉.  </p>\n<p>It was the month of April when we weren't super busy with academics nor projects, and It's pretty usual to hear about event invitations happening around in other colleges. But this news was quite different. Our college's Information Science department with some good folks at <a href=\"https://www.juegostudio.com\">Juego studios</a> were planning to conduct a hackathon in upcoming weekend. I was super excited but let down when I realized it's a Game development thingy. Fun fact: I never created a game before nor a hardcore gamer, am just a design guy or a mediocre web/Android dev.  </p>\n<p>To my surprise my vegan friend <a href=\"https://github.com/chamak-k\">Chaman</a> and Aravind looked excited than usual about the news, a little bit of background check helped me to know they were actually intrested in Unity ( it's a game engine, in case if you are wondering ), and had created some VR stuffs. But still it was a solid no from me, because I'd be just a paper weight during the event (TLDR; that's what happened). I really didn't want to let his excitement down and together with our friend Arjun, we planned to take a shot (we both knew what's gonna happen, lol).</p>\n<p>It was a 24 hours hackathon with a decent cash prize for the winners and the runners-up. The event would start at around 10 O'clock in the morning and finish at the same time next day. We got a few of our friends at SOSC already signed up for the event and yeah devs from a lot of other colleges too.</p>\n<h2>The event day!</h2>\n<p>It was a completely different experience for me because a game development hackathon was something I haven't participated before, so be it. We all 4 of us aimed at the hall where the inaugural function was about to begin, and was calculating our percentage of not winning but at least giving a competition to others during the hackathon. As the formal functions ended, we were handed over with an instruction note which (obviously you guessed it right) had instructions for the event. We had to build a game which would fall under any of the below concepts.</p>\n<ol>\n<li>Beyond the finish line.</li>\n<li>Shoot the target.</li>\n<li>Colors.</li>\n</ol>\n<p>It might sound a little weird except the second one, but yeah the other two were good options too. The 1st one might refer to something like the traditional temple run or Subway surfers game, 2nd one shooting games and finally the third one, something like the infamous color switch or games something similar. As soon as the teams got the instructions every one was busy discussing about what they will be building within the next 24 hours. But for us, it was quite challenging because our team would be relying on a single person to build the entire thing (Which I didn't like much but, was hoping to make use of ourselves during the process). So we had to take in the amount of time and man power we had to build a game up and running. We took the 2nd option (lol, that seemed quite easy at first), and planned to build a dead simple game but by mixing the first option too. Yea, A shooting game without finish line!</p>\n<p>So we started building the game with a simple design which I created, (ha! Had my design skills pay off there) Our plan was to create a single player game, where the user will be controlling 3 soldiers who shoots at the enemy marching at them, and engage to the next level by increasing the speed of spawning enemies and their approach speed. Sounds fun? Well kinda. We quickly got into the unity asset store to grab some 3D Characters for the game and for our surprise we didn't find any good models for enemies so we ended up picking some weird alien model. IMPROVISE! we named the game \"Space Hero\" just because of this.</p>\n<p>While our boy Chaman was busy building the stuff we planned, me and Arjun went on a stroll to meet other teams at the hackathon. After meeting a few teams our hopes went down like a crashing space ship. There were some really good projects one of which looked something similar to Dota, and one more which was a really cool remake of the good old pacman game concept with a 3D environment. We didn't wanna loose anymore of our HOPE so we went back to our desk to IMPROVISE! After laying out our new ideas we went ahead with an idea to make the entire game voice controlled. To make our workload a little balanced me and Arjun took the challenge of implementing it in the game. After a few hours of Googling we felt like professional game developers, lol.</p>\n<blockquote>\n<p>Pro tip: Always make Google your best friend.</p>\n</blockquote>\n<p>We found that implementing a voice recognition system in a game was relatively easy with the windows voice API plugin and we hacked together some code so that our game recognizes atleast 3 commands.</p>\n<ol>\n<li>Left</li>\n<li>Right</li>\n<li>Center!</li>\n</ol>\n<p>Woa! Thats something out of the box we did! Well... That was really simple with a couple of lines like this.</p>\n<pre><code class=\"language-csharp\">private KeywordRecognizer recognizer;\nprivate string[] keywords;\n\nvoid Start()\n{\n    recognizer = new KeywordRecognizer(keywords);\n    recognizer.OnPhraseRecognized += OnPhraseRecognized;\n    recognizer.Start();\n}\n\nprivate void OnPhraseRecognized(PhraseRecognizedEventArgs args)\n{\n    //check which phrase is being recognized\n    //activate particular soldier based on this condition\n}\n</code></pre>\n<p>Its pretty much evident what these command does, if the game recognizes \"Left\" the soldier in the left shoots, and so on for others too. But it'd only recognize with a 3/4 luck. Well, we still did something creative and saved our face from doing nothing, except me and Arjun were watching Chaman and Aravind building most of the stuffs like a stallion, while we were sipping our 5th cup of coffee from a distance. Before you judge us, we did do something. Planning, designing and dropping the golden idea was a lot of our contribution (Beat that!). It's a simple fact while attending hackathons to have people with diverse skills in the team to become successful or at least build something cool and have a good experience.</p>\n<p>For the final touch Aravind made the movement of the enemies and their spawn area completely random which made the game even more exciting. We were testing the game with full excitement but we were sure winning the event is something that can be called as a miracle. We still choose to give a strong competition while the fights of Atom controlled by Hugh Jackman from the movie Real Steel was playing in my head.</p>\n<p><img src=\"https://media.giphy.com/media/OQJffa3JkqDQY/giphy.gif\" alt=\"real steel\"></p>\n<p>We went ahead with the presentation in-front of the CEO and developers from Juego studios for evaluation. We were surprised to see them interested in playing the game, looking at them shouting at the mic to find that one voice the game recognizes among all the others shouting left, right and centre at it, and the smile of excitement in their face when the game actually recognized and shot a few alien bad ass. We were happy, they were happy and our team headed back to home before hearing the announcement, because we weren't much of a believer of miracles happening to our project and actually getting at least a consolation prize.</p>\n<p>As you have already knew by now, we were shocked to hear the news after couple of hours that we won the hackathon! Yaay! But nay, we were like \"It's a prank bro\".</p>\n<p><img src=\"https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif\" alt=\"pranked\"></p>\n<p>Fast forward after collecting the prizes next day. That was actually awkward! We learned a lot of things from this hackathon which we weren't able to find in our previous hackathons.</p>\n<ol>\n<li>A hackathon team should be diverse in skills, not just a bunch of programmers with no design thinking, because this way it's really hard to build something cool.</li>\n<li>Hackathons are not just to show your competence but to learn a lot of new things, socialize and find new contacts (and hella coffee).</li>\n<li>It helps to measure the skills we have and to measure our learning capability in critical situations.</li>\n<li>It's an opportunity to know about the trending technologies, or technologies which you may not even know existed. (well, there is a npm package for that too)</li>\n<li>Always think out of the box, be creative and be unique and don't copy others. That's one secret of winning a hackathon, \"Being different\".</li>\n<li>Always stay back till the event concludes and wait for the announcement. Miracles do happen!</li>\n</ol>\n<p>Do you have an interesting experience to share? Feel free to open a pull request with your article to our <a href=\"https://github.com/haxzie/sosc-website\">GitHub repository</a>. </p>",frontmatter:{cover:{publicURL:"/static/cover-40227c30e6c059a61b9e139f764a461a.jpg"},slug:"/blog/winning-our-very-first-game-dev-hackathon",tags:"hackathon experience",title:"Winning our very first game development hackathon",description:"Our Experience on participating in GameJam 2018 conducted by Juego studios in Sahyadri College. If you are a beginner and want to participate in hackathons, this post has a good take away which can help you in your next hackathon.",author:"haxzie",name:"Musthaq Ahamad",date:"08-Aug-2018",designation:null}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-winning-our-very-first-game-dev-hackathon-7b6d07cb610f45f5bf56.js.map