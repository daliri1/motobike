setInterval(function(){
         var x = Math.round(Math.random() * 255);
         var y = Math.round(Math.random() * 255);
         var z = Math.round(Math.random() * 255);       
         var bg =  " background:rgb("+x+","+y+","+z+");";
         var element = document.getElementById("random-background");
         element.style = bg;
        },1000);     


          
        var a = prompt("Enter the Number of your BirthMonth",);
        var b = prompt("Enter the Date of your Birthday",);
  

        if( ( a == 12 && b >= 22  ) || (a == 1 && b <= 19))
        {
        document.write("<h1>Capricorn</h1>");
			  	document.getElementById("sign").src="capricorn.jpg";
        document.write("<p>Those born under the Capricorn zodiac sign are talented at applying their keen intelligence and ambition to practical matters.  Stability and order are important to them - and this makes them good organizers. Their goals are often lofty, and they achieve them slowly - but purposefully, and systematically. They are gifted with a sharp intuition, although they can be rather secretive about what they perceive. They are patient with themselves - they have confidence that they can accomplish all their goals if they follow their step-by-step plan. They are responsible people that often take the heavy burden of others - whether willingly, or just because they are so capable. However, they find it difficult to share their own troubles and can struggle with depression if they don't learn how to express their feelings</p>");
        }
      
        
        else if ( ( a == 1 && b >= 20  ) || (a == 2 && b <= 17))
        {
            document.write("<h3>Aquarius</h3>");
            document.getElementById("sign").src="aquarius.jpg";
            document.write("<p>Aquarius often comes off as an oddball - they have quirky personalities and quietly go about accomplishing their goals in quiet, and unorthodox ways. Oftentimes, just because Aquarius chooses to take the path less traveled, the results of their eccentric methods are surprisingly effective. They are the humanitarians of the zodiac, taking up banners for the greater good of humanity. Many of them are also easy going and their peculiarity alongside their curious nature make them fast friendships. Sometimes, if they don't strive to motivate themselves, they can succumb to laziness. Many are often gifted with a strong sense of art and poetry.</p>");
        }
        else if ( ( a == 2 && b >= 18  ) || (a == 3 && b <= 19))
        {
            document.write("<h3>Pisces</h3>");
            document.getElementById("sign").src="pisces.jpg";
            document.write("<p>The Pisces zodiac sign are the dreamers and mystics of the zodiac - but you may never know it. Many of them have extremely vivid inner lives - filled with fantasy, magic and wonder. They may find it hard to express that inner life, meaning that many of them are introverts. They are honest, compassionate, and trustworthy but they can sometimes take it too far and be rather gullible. Because of that they can be taken advantage of. Beneath their quiet exterior, Pisces has an intense determination, which helps them transcend any obstacles that come their way.</p>");
        }
           
        else if ( ( a == 3 && b >= 20  ) || (a == 4 && b <= 19))
        {
            document.write("<h3>Aries</h3>");
            document.getElementById("sign").src="aries.jpg";
            document.write("<p>Those born under the Aries zodiac sign often have an exciting and enthusiastic energy. They often seek new and challenging adventures that can push their limits. They are driven, ambitious and curious, and aries tends to have a strong sense of justice. They love competition, in all its forms. They are generally quite optimistic, and they love being placed in leadership positions.</p>");
        }
        else if ( ( a == 4 && b >= 20  ) || (a == 5 && b <= 20))
        {
            document.write("<h3>Taurus</h3>");
            document.getElementById("sign").src="taurus.jpg";
            document.write("<p>People born under the Taurus zodiac sign are often incredibly dedicated, reliable and dependable. Above all things, they value their sense of security and stability.  After Aries brings its fiery energy, it is Taurus that lays down the foundations and follows through. They tend to be rather stubborn and dislike change. When they settle with a routine that they like, it can take much effort to get them to change. </p>");
        }
        else if ( ( a == 5 && b >= 21  ) || (a == 6 && b <= 20))
        {
            document.write("<h3>Gemini</h3>");
            document.getElementById("sign").src="gemini.jpg";
            document.write("<p>Those born under the Gemini zodiac sign enjoy socializing and love surrounding themselves with people. They are ruled by the planet Mercury, and so they are never happier than when they are sharing their ideas and communicating with the people around them. They enjoy chit-chat and tend to have expression and communication very high on their list of priorities. Sometimes their love for sharing themselves with others, and their never-ending list of ideas can make them seem nervous, excited, and sometimes even manic.</p>");
        }
        else if ( ( a == 6 && b >= 21 ) || (a == 7 && b <= 22))
        {
            document.write("<h3>Cancer</h3>");
            document.getElementById("sign").src="cancer.jpg";
            document.write("<p>Those born under the zodiac sign Cancer need to be needed. They have an great desire to feel loved and appreciated in every part of their lives. This is needed so that they can develop a sense of security and identity. To the Cancer zodiac sign, their sense of home is very important to their feeling of safety and comfort. They find it rather difficult to achieve unless they feel safe in their home. They are talented at developing home environments for people that are close to them - in both an emotional and physical sense. </p>");
        }
        else if ( ( a == 7 && b >= 23  ) || (a == 8 && b <= 22))
        {
            document.write("<h3>Leo</h3>");
            document.getElementById("sign").src="leo.jpg";
            document.write("<p>Leos tend to have almost a royal air about them. Their planetary ruler is the Sun, and so they are talented at bringing warmth, life and light into the relationships that are important to them. Many Leos will have a large group of friends that adore them. They have a kind of natural charisma which often makes other signs gravitate towards them. Like their planetary ruler, Leos love to be at the center of attention and they deeply appreciate compliments and even flattery. Their happy and outgoing attitude towards life makes them pleasurable to be around</p>");
        }
        else if ( ( a == 8 && b >= 23  ) || (a == 9 && b <= 22))
        {
            document.write("<h3>Virgo</h3>");
            document.getElementById("sign").src="virgo.jpg";
            document.write("<p>Those born under the Virgo zodiac sign have capable, organized and analytical minds, which often makes them a pleasure to chat with. Even when they have rather fantastic stories, the charming way they tell them can make those stories convincing. Virgos are curious people, and they have a natural gift for research - whether it comes to assignments, or even people. They also often have great memory and a talent for intuition. They make for excellent team members in both work and social situations. They love to collaborate, although their sometimes critical nature can annoy others when those criticisms are not understood.</p>");
        }
        else if ( ( a == 9 && b >= 23  ) || (a == 10 && b <= 22))
        {
            document.write("<h3>Libra</h3>");
            document.getElementById("sign").src="libra.jpg";
            document.write("<p>Those born under the Virgo zodiac sign have capable, organized and analytical minds, which often makes them a pleasure to chat with. Even when they have rather fantastic stories, the charming way they tell them can make those stories convincing. Virgos are curious people, and they have a natural gift for research - whether it comes to assignments, or even people. They also often have great memory and a talent for intuition. They make for excellent team members in both work and social situations. They love to collaborate, although their sometimes critical nature can annoy others when those criticisms are not understood.</p>");
        }
        else if ( ( a == 10 && b >= 23  ) || (a == 11 && b <= 21))
        {
            document.write("<h3>Scorpion</h3>");
            document.getElementById("sign").src="scorpion.jpg";
            document.write("<p>Those born under the Virgo zodiac sign have capable, organized and analytical minds, which often makes them a pleasure to chat with. Even when they have rather fantastic stories, the charming way they tell them can make those stories convincing. Virgos are curious people, and they have a natural gift for research - whether it comes to assignments, or even people. They also often have great memory and a talent for intuition. They make for excellent team members in both work and social situations. They love to collaborate, although their sometimes critical nature can annoy others when those criticisms are not understood.</p>");
        }
        else if ( ( a == 11 && b >= 22  ) || (a == 12 && b <= 21))
        {
            document.write("<h3>Saguitarius</h3>");
            document.getElementById("sign").src="sagittarius.jpg";
            document.write("<p>The Sagittarius zodiac sign often gains the reputation of the philosopher among their fellow zodiac signs. They do have a great ability to focus, but this may be surprising since many of them love exploring and wandering the world, tasting all the pleasures of life. From an early age, they must learn how to channel their energy or else they risk stretching themselves out too thin going in too many directions. They often are hasty individuals and lack patience. When they encounter failure they can sometimes make a sudden comeback, much to the surprise of others. While they are loyal friends, they may find it hard to commit as this can run counter to their desire for freedom and expansion. </p>");
        }
        else
            {
            document.write("Invalid Input")
            }
            
