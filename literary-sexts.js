//An array of quotes scraped from https://www.tumblr.com/search/literary+sexts using the code below:
/* 
  var posts = document.getElementsByClassName("post_content_inner")
  var quotes = [];
  for (var i = 0; i<posts.length;i++) {
    var quote = {};
    quote.text = document.getElementsByClassName("quote")[i] ? document.getElementsByClassName("quote")[i].innerHTML : "";
    quote.source = document.getElementsByClassName("quote_source")[i] ? document.getElementsByClassName("quote_source")[i].innerHTML: "";
    if (quote.text.length > 0) {
      quotes.push(quote);
      }
  }
*/

var quotes = [
  {
    "text": "We fuck like we’re the only ones who do it right. You say my name and it comes out like a dark confession. Our mouths swing open like doors. Our mouths open and we spill into each other, like wine.",
    "source": "—<a href=\"http://thelovejournals.tumblr.com/\" target=\"_blank\">Rudy Francisco</a>, “Like Every Other Man”<br> (via <a href=\"https://t.umblr.com/redirect?z=http%3A%2F%2Fthelovejournals.com%2F&amp;t=MmI4NjNiM2NlNWQ2N2ExNzQ5NWQzYmQxZTBlYjgwNzFiZDRiMTlkMCxmcVlGQ3BPVQ%3D%3D&amp;b=t%3Ae4PUxZprpK3ZSmAvM9Mqrg&amp;p=https%3A%2F%2Faudibleglitter.tumblr.com%2Fpost%2F164049804506%2Fyour-heart-will-become-a-dusty-piano-in-the&amp;m=1\" target=\"_blank\">thelovejournals</a>)"
  },
  {
    "text": "literary sext: Tell me you don’t know how to midnight without me. Send me a picture of that empty space on the couch beside you. Say this is yours; this loneliness for love when the sun is off dreaming. Tell me you can see the ghost of me curling up, wrapping myself around your warmth. Tell me this is how the sky must feel when she meets the horizon. This is how it feels to come home.",
    "source": "—<a href=\"https://t.umblr.com/redirect?z=http%3A%2F%2Fwordsnquotes.com%2Fsearch%2FJohn-Steinbeck&amp;t=MzQ3MTU4ODgyNjlmODU1ZWNmMGU1MzYxMjM5ODAwYTUwMGNmMjA4NCxaZXM4ek9Deg%3D%3D&amp;b=t%3Ae4PUxZprpK3ZSmAvM9Mqrg&amp;p=https%3A%2F%2Faudibleglitter.tumblr.com%2Fpost%2F163389740671%2Fits-so-much-darker-when-a-light-goes-out-than-it&amp;m=1\" target=\"_blank\">\n\nJohn Steinbeck</a>, <i><a href=\"https://t.umblr.com/redirect?z=http%3A%2F%2Fwordsnquotes.com%2Ftagged%2FThe-Winter-of-Our-Discontent&amp;t=YTc2ODRlYjMyN2U0ZGYzOTM3M2Q3MTRjNGQwYWI4MzI4NmQxNzY0NSxaZXM4ek9Deg%3D%3D&amp;b=t%3Ae4PUxZprpK3ZSmAvM9Mqrg&amp;p=https%3A%2F%2Faudibleglitter.tumblr.com%2Fpost%2F163389740671%2Fits-so-much-darker-when-a-light-goes-out-than-it&amp;m=1\" target=\"_blank\">The Winter of Our Discontent</a>\n\n</i><br> (via <a href=\"https://t.umblr.com/redirect?z=http%3A%2F%2Fwordsnquotes.com%2F&amp;t=ODU3ZGNmMjI1YTEyMzVjNjkyMjYyODJlZDgzZjE0M2JhNGZlZjQ1NixaZXM4ek9Deg%3D%3D&amp;b=t%3Ae4PUxZprpK3ZSmAvM9Mqrg&amp;p=https%3A%2F%2Faudibleglitter.tumblr.com%2Fpost%2F163389740671%2Fits-so-much-darker-when-a-light-goes-out-than-it&amp;m=1\" target=\"_blank\">wordsnquotes</a>)"
  },
  {
    "text": "You’re kissing a wildfire up my thigh and I am tracing the landscape of your jawbone like a sculpture. My hands were made for this.",
    "source": "—<i>Your Light&nbsp;// <b><a href=\"http://audibleglitter.tumblr.com/\" target=\"_blank\">d.h.</a></b></i> (via <a href=\"http://audibleglitter.tumblr.com/\" target=\"_blank\">audibleglitter</a>)"
  },
  {
    "text": "I want you next to me, in my bed, your clothes making friends with my floor. Love me hard enough so we wake up the neighbors.",
    "source": "\n                —&nbsp;\n                Tera K. // <i>Literary Sexts Vol. 2</i>            "
  },
  {
    "text": "Do not fall in love with people like me. <br>\nI will take you to museums, and parks, and monuments, and kiss you in every beautiful place, so that you can never go back to them without tasting me like blood in your mouth.<br>\nI will destroy you in the most beautiful way possible. And when I leave you will finally understand, why storms are named after people.",
    "source": "\n                —&nbsp;\n                Schuyler Peck            "
  },
  {
    "text": "I am fragile and unholy.<br>\nOpen. Ravage. Eat.",
    "source": "\n                —&nbsp;\n                Caitlin Siehl, Literary Sexts            "
  },
  {
    "text": "I don’t want your affection; I want your chest cracked open and my hands around your beating heart. I want to know your dirty little secrets. Tell me how you got here. From the chronicles of your childhood through your fucked up adolescence, I want to know about your scars. Even the ones I can’t see. Especially the ones I can’t see.",
    "source": "\n                —&nbsp;\n                Nishat Ahmed, Literary Sexts<br>            "
  },
  {
    "text": "may your fingers<br>\ntread along<br>\nmy thigh<br>\nwith lines of<br>\nyour favourite poem",
    "source": "\n                —&nbsp;\n                <a href=\"https://t.umblr.com/redirect?z=https%3A%2F%2Fwww.goodreads.com%2Fauthor%2Fshow%2F7145854.Caitlyn_Siehl&amp;t=N2M0ZjhmZTQ2NDI2YTgwZmNmZWMzMDY5ZGQ0ZGY4YTEyYjRhMWE0MyxEMFhYRHVFQQ%3D%3D&amp;b=t%3A_fdTJmvZ0TWnZfF2UJHdhA&amp;p=https%3A%2F%2Fbymorninggone.tumblr.com%2Fpost%2F160414668959%2Fdo-not-fall-in-love-with-people-like-me-i-will&amp;m=1\">Caitlyn Siehl</a>, <a href=\"https://t.umblr.com/redirect?z=https%3A%2F%2Fwww.goodreads.com%2Fwork%2Fquotes%2F40031305&amp;t=MDkxZGFlNGM2MDZkOGIzZmUxNmMwNWE3YjgxNWIwMDhjZDk0NDMzNyxEMFhYRHVFQQ%3D%3D&amp;b=t%3A_fdTJmvZ0TWnZfF2UJHdhA&amp;p=https%3A%2F%2Fbymorninggone.tumblr.com%2Fpost%2F160414668959%2Fdo-not-fall-in-love-with-people-like-me-i-will&amp;m=1\">Literary Sexts: A Collection of Short &amp; Sexy Love Poems</a><br>            "
  },
  {
    "text": "I taste the good and bad in you and want them both.",
    "source": "\n                —&nbsp;\n                Tanaka Mhishi, <i>Literary Sexts II</i>            "
  },
  {
    "text": "His lips against her neck. His hand trailing down, down, down. He felt her breathing change and he paused, hovering. “I can stop if you want.”",
    "source": "\n                —&nbsp;\n                SSK            "
  },
  {
    "text": "Won’t you teach me how to kiss. Not just lips pressed against lips, but how to open my mouth and let you taste the bittersweet on my tongue. Teach me how to bite without drawing blood, how to touch and make you feel it. How to share space, how to fit the pieces together, how to blur the lines between you and me. How to swallow whispers of “us” and let them fill my belly, make me softer, make me warm.",
    "source": "\n                —&nbsp;\n                eux ho            "
  },
  {
    "text": "I don’t just want to take your breath away. I want to rip it from your mouth and keep it locked away between my teeth. You can only have it back if you kiss me again.",
    "source": "\n                —&nbsp;\n                Anita Ofokansi, Literary Sexts            "
  },
  {
    "text": "<p>Hickies stain the body for staking claim<br>\nwell, how about I mark my name on your mental<br>\nConsume your every thought with titillating,&nbsp;passionate, poetic prose<br>\nbut&nbsp;how can I compose this poem whilst maintaining our innocence<br>\nWell there’s nothing sinful about never leaving you thoughtless <br>\nand seducing you from the neck up</p><p><br>\nI don’t want the typical vigorous movement of our bodies<br>\nbut the synchronizing movement of our minds<br>\ntaking the time of getting our minds engaged<br>\nwhile building an array of intimacy as we become intimately closer<br>\ninvolving ourselves in enticing, illicit, deep conversation<br>\nas we create a new word called mindplay</p><p><br>\nMay I offer and engage you with a custom<br>\ndiamond encrusted 9ct white gold ring<br>\nand marry your every thought<br>\nfor proactive or for procrastination<br>\nfor happiness or for depression<br>\nfor self-confidence or for self-doubt<br>\nuntil mental stimulation do us part</p><p><br>\nAnd for our honeymoon, we can feel the heartbeats<br>\nof our inner rhythms as we reach the climatic altitude<br>\nof tasting each other’s spirited imagination<br>\ntaking the time to penetrate every entrance of our minds<br>\nThen in the after hours of the night<br>\nI stare as a ray of moonlight slashes through the blinds<br>\nand I think to myself “Thank God I was able to make love to you”<br>\nbut not to your body first, but to your mind</p><p><br>\nAnd as I sit on the edge of the bed covered in bedsheets<br>\nI can feel the harmony in which we inhale and exhale<br>\nand I don’t have to worry because I know in your dreams<br>\nmy mere essence is keeping you at peace<br>\nand I smile in knowance because I reminiscence<br>\nwhen I was embedded in the fibers with which your mind speaks<br>\nbecause there’s nothing sinful about never leaving you thoughtless<br>\nand seducing you from the neck up</p>",
    "source": "\n                —&nbsp;\n                and they say consent isn’t sexy            "
  },
  {
    "text": "come, spend the night. I want to make the thunder jealous.",
    "source": "\n                —&nbsp;\n                SSK            "
  },
  {
    "text": "I don’t just want to take your breath away. I want to rip it from your mouth and keep it locked away between my teeth. You can only have it back if you kiss me again.",
    "source": "\n                —&nbsp;\n                Meggie Royer, <em>Literary Sexts</em>            "
  },
  {
    "text": "Your lips<br>\nink<br>\nmy body<br>\npaper –&nbsp;<br>\nlet’s make poetry.",
    "source": "\n                —&nbsp;\n                mindplay            "
  },
  {
    "text": "I will destroy you in the most beautiful way possible. And when I leave you will finally understand, why storms are named after people.",
    "source": "\n                —&nbsp;\n                Gabrielle Lund, “Literary Sexts” (overturnedinkwells.tumblr.com)            "
  },
  {
    "text": "I want you next to me, in my bed, your clothes making friends with my floor. Love me hard enough so we wake up the neighbors.",
    "source": "\n                —&nbsp;\n                Meggie Royer, Literary Sexts\n\n<br>            "
  },
  {
    "text": "I breathe in poems like they’ll save me - and they have so far.",
    "source": "\n                —&nbsp;\n                <blockquote><p>(<b>k.m.</b>)</p></blockquote>            "
  },
  {
    "text": "I want to hold you for so long that loving you becomes a muscle memory, so it’s something I don’t have to think about; but I will always be thinking about it.",
    "source": "\n                —&nbsp;\n                Caitlyn Siehl,<em> Literary sexts</em><br>            "
  },
  {
    "text": "You’re so raw and pretty and pale in the morning, like marble. I want to protect you and worship you.",
    "source": "\n                —&nbsp;\n                Nishat Ahmed,<em> Literary Sexts</em>            "
  },
  {
    "text": "Long story short, I’m a hurricane without a name. A force of nature, more storm than girl. Take shelter. I’ll protect you if I can, but baby I’ll wreck you if I get the chance. Love me if you dare. You can be my beautiful disaster.",
    "source": "\n                —&nbsp;\n                Fortesa Latifi            "
  },
  {
    "text": "During the day,<br>\nTreat me like expensive China,<br>\nPut me behind glass and<br>\nShow me off to your friends<br>\nLike a housewife at a garden party. <br>\nBut when the night engulfs us,<br>\nTake me off the shelf,<br>\nI want to become<br>\nYour favourite meal. <br>\nDevour me<br>\nLike you haven’t eaten in weeks;<br>\nLeave me bruised and shaking <br>\nIn your bed.",
    "source": "\n                —&nbsp;\n                <i>literary sext, </i>maria santone            "
  },
  {
    "text": "I’ll trace my hands all over your body,<br>\nLeave no path uncovered<br>\nAs I explore you with nothing other than my fingertips,<br>\nI’ll kiss onto you the secrets of the world<br>\nSo they’ll be hidden solely on your skin.<br>\nTrust me, when I make you say my name<br>\nThat I will make sure you remember <br>\nMy touch, my tongue, my love, my lips<br>\nOn every inch of you<br>\nAnd I’ll make it so that no one knows your body better,<br>\nNo better than I know it like this.",
    "source": "\n                —&nbsp;\n                literary sext            "
  },
  {
    "text": "My heart beats its way out of my chest when you so much as look at me; I don’t know how I’ve survived fucking you so many times.",
    "source": "\n                —&nbsp;\n                Anita Ofokansi            "
  },
  {
    "text": "You never really belonged to me.<br>\nBut in this moment<br>\nwith my heart on my sleeve<br>\nand my clothes on the floor<br>\nI can pretend that you did.",
    "source": "\n                —&nbsp;\n                s.r. // <b><i>body better</i></b><br>            "
  },
  {
    "text": "I want that tough, throw me round the ring love. The necks with bruises and the swollen lips; the play-wrestling that leads to heat-inducing caress. The plea of: ‘Please, <br>\npin me down again.’",
    "source": "\n                —&nbsp;\n                Maria Santone, Literary Sexts: Volume 2            "
  },
  {
    "text": "I will destroy you in the most beautiful way possible. And when I leave, you will finally understand why storms are named after people.",
    "source": "\n                —&nbsp;\n                Sext (No Tap Outs&nbsp;‘til You Tap It)            "
  },
  {
    "text": "When is a monster not a monster? Oh, when you love it.",
    "source": "\n                —&nbsp;\n                <i>Literary Sexts: A Collection of Short &amp; Sexy Love Poems </i>by&nbsp;Caitlyn Siehl            "
  },
  {
    "text": "Our bodies becomes battlefields and we make love like this is war. Drop kisses like grenades until all that’s left is silence and smoke clearing.",
    "source": "\n                —&nbsp;\n                Literary Sexts by Caitlyn Siehl            "
  },
  {
    "text": "Ever since you touched me,&nbsp;nothing else feels quite as right. You undressed me of my inhibitions, kissed the daylights out of me until it was night all the time, and we were all whispers and greedy hands and open mouths. You ask what turns me on. You did. The problem now, my love, is that you never turned me<br>\noff.",
    "source": "\n                —&nbsp;\n                Anita Ofokansi, <em>Literary Sexts</em>            "
  },
  {
    "text": "We commit sins in holy places, fold ourselves between pews like dirty pictures tucked into a bible. Plant each other’s name until they sound like a scripture.",
    "source": "\n                —&nbsp;\n                SSK (<i>fuck this distance, i miss being under your hands</i>)            "
  },
  {
    "text": "<p>Here’s to hiding things in plain sight;<br>\nto looking at you with a longing<br>\nthat only you and I know;<br>\nto writing<br>\nI AM TOO IN LOVE WITH YOU<br>\nTO FEEL AFRAID<br>\nacross the walls.</p>\n\n<p>Here’s to unshakeable obsession;<br>\nto always wanting what we can’t have;<br>\nto throwing caution to the wind<br>\nand sticking our tongues down the throat<br>\nof insanity.</p>\n\n<p>Here’s to getting drunk for free<br>\nand kissing in the dark;<br>\nto hoping you forget<br>\neverything you told me;<br>\nto hoping that you don’t.</p>",
    "source": "\n                —&nbsp;\n                Anita Ofokansi,&nbsp;<em>Literary Sexts vol. 1</em>            "
  },
  {
    "text": "I thought&nbsp;‘want’ was a word of immaturity. But I know better now. Some may say&nbsp;‘want’ and mean hot blood and itching fingers; I say&nbsp;‘want’ and mean desire in its entirety. In its all consuming form. I say&nbsp;‘want’ and mean when there seems to be no way, I will make one to get to you, I mean, give me your version of forever, I’ll take whatever I can get, I mean, my body remembers every touch, and now I get tingles before you even make contact. I mean, I want you. Everything.",
    "source": "\n                —&nbsp;\n                Cheers.            "
  },
  {
    "text": "I am starving for your touch, And it has been too long since I tasted the stars you keep locked between your teeth.",
    "source": "\n                —&nbsp;\n                SSK (<i>alternative i love&nbsp;yous pt. 2</i>)            "
  },
  {
    "text": "I don’t just want to take your breath away. I want to rip it from your mouth and keep it locked away between my teeth. You can only have it back if you kiss me again.",
    "source": "\n                —&nbsp;\n                things that I never quite have had the courage to tell you            "
  },
  {
    "text": "My skin is full of flowerbeds and you know every way to make them bloom.",
    "source": "\n                —&nbsp;\n                Meggie Royer, Literary Sexts<br>            "
  },
  {
    "text": "sext: i see you without my glasses on, and sure, that might be medically improbable that i can’t see much else, but once, i read that even a sea away, dionysus heard ariadne scream for her horned brother, and he’s waited for her since. i guess all i can say is that i’d wait for you too.",
    "source": "\n                —&nbsp;\n                <em>text messages from those descended from gods pt. 1</em> || <a href=\"http://bunnycorcorans.tumblr.com\">bsc</a>            "
  },
  {
    "text": "When is a monster not a monster? <br>\nOh, when you love it.",
    "source": "\n                —&nbsp;\n                Caitlyn Siehl, Literary Sexts: A Collection of Short &amp; Sexy Love Poems            "
  },
  {
    "text": "Every time, you make a meal of my heart, and every time, I let you.",
    "source": "\n                —&nbsp;\n                S.T. Gibson, Literary Sexts            "
  },
  {
    "text": "Do not fall in love with people like me. <br>\nI will take you to museums, and parks, and monuments, and kiss you in every beautiful place, so that you can never go back to them without tasting me like blood in your mouth.<br>\nI will destroy you in the most beautiful way possible. And when I leave you will finally understand, why storms are named after people.",
    "source": "\n                —&nbsp;\n                <a href=\"https://t.umblr.com/redirect?z=https%3A%2F%2Fwww.goodreads.com%2Fauthor%2Fshow%2F7145854.Caitlyn_Siehl&amp;t=N2M0ZjhmZTQ2NDI2YTgwZmNmZWMzMDY5ZGQ0ZGY4YTEyYjRhMWE0MyxEMFhYRHVFQQ%3D%3D&amp;b=t%3A_fdTJmvZ0TWnZfF2UJHdhA&amp;p=https%3A%2F%2Fbymorninggone.tumblr.com%2Fpost%2F160414668959%2Fdo-not-fall-in-love-with-people-like-me-i-will&amp;m=1\">Caitlyn Siehl</a>, <a href=\"https://t.umblr.com/redirect?z=https%3A%2F%2Fwww.goodreads.com%2Fwork%2Fquotes%2F40031305&amp;t=MDkxZGFlNGM2MDZkOGIzZmUxNmMwNWE3YjgxNWIwMDhjZDk0NDMzNyxEMFhYRHVFQQ%3D%3D&amp;b=t%3A_fdTJmvZ0TWnZfF2UJHdhA&amp;p=https%3A%2F%2Fbymorninggone.tumblr.com%2Fpost%2F160414668959%2Fdo-not-fall-in-love-with-people-like-me-i-will&amp;m=1\">Literary Sexts: A Collection of Short &amp; Sexy Love Poems</a>\n\n<br>            "
  },
  {
    "text": "Before I knew you I read myself into all of your love poems",
    "source": "\n                —&nbsp;\n                Tammy Brewer, <em>Literary Sexts</em>            "
  },
  {
    "text": "Your palms are littered with stardust<br>\nTouch me<br>\nLet it it burn and rush throughout my skin<br>\nYour eyes are galaxies-breath taking<br>\nAnd I swear<br>\nI saw stars there<br>\nLet me become lost there<br>\nGasping for air<br>\nLet me be the ocean.<br>\nYou be the ship.<br>\nGasping for air<br>\nDrown in me<br>\nGo down in me",
    "source": "\n                —&nbsp;\n                <p>Literary Sexts</p>\n<p>Via(<a href=\"http://herloveisbetterthanchocolate.tumblr.com\" target=\"_blank\">herloveisbetterthanchocolate</a>)</p>            "
  },
  {
    "text": "Daydreaming of running my fingers down your spine as if you were my favorite book. I want torn pages and I want smudged words.",
    "source": "\n                —&nbsp;\n                Darcy Vines, from<i>&nbsp;“Literary Sexts: A Collection of Short &amp; Sexy Love Poems, Volume 1″</i> edited by Amanda Oaks and Caitlyn Siehl            "
  },
  {
    "text": "You are laying beside me and my hand is splayed like a starfish across your chest. I can feel the ocean in my fingertips.",
    "source": "\n                —&nbsp;\n                Caitlyn Siehl, from<i>&nbsp;“Literary Sexts: A Collection of Short &amp; Sexy Love Poems, Volume 1″ </i>edited by Amanda Oaks and Caitlyn Siehl            "
  },
  {
    "text": "she had hands that could undo orion’s belt.",
    "source": "\n                —&nbsp;\n                literary sexts, <a href=\"http://hailthequeens.tumblr.com/\">t.a.</a>            "
  },
  {
    "text": "Let me draw you in – my body is good and clean in your animal light.",
    "source": "\n                —&nbsp;\n                April Michelle Bratten, from <i><a href=\"https://t.umblr.com/redirect?z=https%3A%2F%2Fwww.etsy.com%2Flisting%2F220278899%2Fliterary-sexts-volume-2-a-collection-of&amp;t=Zjc0ZDM3YjNjOTNhOTBlNDRhNTdhZjMzMjEwNTNjZTNjYTI4NDY0YSxBVmdNM1p5dw%3D%3D&amp;b=t%3ALZCaBPQ-dcMNZdzId1f8rA&amp;p=https%3A%2F%2Fsoracities.tumblr.com%2Fpost%2F141150079186%2Flet-me-draw-you-in-my-body-is-good-and-clean-in&amp;m=1\">Literary Sexts, Vol. 2</a></i>            "
  },
  {
    "text": "I have been thinking of how I want to be touched by you, with hands that will play me like piano keys, with fingers that will make a symphony out of me.",
    "source": "\n                —&nbsp;\n                <strong>Karese Burrows, Literary Sexts</strong>            "
  },
  {
    "text": "may your fingers<br>\ntread along<br>\nmy thigh<br>\nwith lines of<br>\nyour favourite poem",
    "source": "\n                —&nbsp;\n                eux ho            "
  },
  {
    "text": "His lips against her neck. His hand trailing down, down, down. He felt her breathing change and he paused, hovering. “I can stop if you want.”",
    "source": "\n                —&nbsp;\n                and they say consent isn’t sexy            "
  },
  {
    "text": "I’m not a religious person, but you make me want to scream out God’s name all night long.",
    "source": "\n                —&nbsp;\n                <em>Literary Sexts</em>-via(<a href=\"http://herloveisbetterthanchocolate.tumblr.com\" target=\"_blank\"><strong>herloveisbetterthanchocolate</strong></a>)            "
  },
  {
    "text": "<p>Do not fall in love with people like me.&nbsp;<br>\nI will take you to museums, and parks, and monuments, and kiss you in every beautiful place, so that you can never go back to them without tasting me like blood in your mouth.</p>\n\n<p>I will destroy you in the most beautiful way possible. And when I leave, you will finally understand why storms are named after people.</p>",
    "source": "\n                —&nbsp;\n                Caitlyn Siehl, <i>Literary Sext</i>            "
  },
  {
    "text": "When is a monster not a monster? Oh, when you love it.",
    "source": "\n                —&nbsp;\n                Caitlyn Siehl, <em>Literary Sexts: A Collection of Short &amp; Sexy Love Poems&nbsp;</em>(2014)            "
  },
  {
    "text": "When is a monster not a monster? <br>\nOh, when you love it.",
    "source": "\n                —&nbsp;\n                Caitlyn Siehl, Literary Sexts: A Collection of Short &amp; Sexy Love Poems            "
  },
  {
    "text": "My hands are nomads, my dear desert. May they never find rest.",
    "source": "\n                —&nbsp;\n                Lex Bobrow,&nbsp;<em>LIterary Sexts</em>            "
  },
  {
    "text": "I think about<br>\nyour mouth<br> and the way<br>\nyou smile at me<br>\nover the bar.<br> I think about<br>\nyour trembling hands,<br> your warm hands,<br> your hands shaking<br>\nall the way down my back.<br>\nI think about your wrists.<br>\nI think about my fingers<br>\nrunning over your wrists.<br> I think about you<br>\npulling me closer<br>\nso that I can<br>\ngently kiss<br>\nyour wrists.",
    "source": "\n                —&nbsp;\n                Fixation.            "
  }
]
