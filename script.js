document.addEventListener('DOMContentLoaded', () => {
    const danishContent = {
        om: `Om Morten Haulik`,
        omContent: `Morten Haulik er en førende ekspert inden for Virtual Reality (VR), Augmented Reality (AR) og Extended Reality (XR), baseret i København. I det seneste årti har Morten arbejdet professionelt med VR og AR, og hans ekspertise er blevet anerkendt både nationalt og internationalt. Morten har bidraget som ekspert i prominente medier som Ekstrabladet, Jyllandsposten, Børsen, Ingeniøren, Radio4, DR, Berlingske, og mange flere. Han har også spillet en nøglerolle i produktionen af episoden om VR i DR2’s "So Ein Ding".`,
        book: `Book Morten som Keynote Speaker eller Foredragsholder`,
        bookContent: `Ønsker du at få indblik i de nyeste trends og udviklinger inden for VR, AR og XR? Ønsker du at inspirere dit team eller dit publikum med spændende og aktuelle indsigter? Book Morten Haulik som keynote speaker eller foredragsholder. Morten leverer engagerende og informerende præsentationer, der inspirerer og udfordrer publikum. <a href="mailto:BookMortenHaulik@gmail.com">Klik her</a> for at booke et foredrag nu!`,
        bestil: `Bestil et Foredrag eller Workshop med Morten Haulik`,
        bestilContent: `Morten tilbyder foredrag og workshops om emner som Virtual Reality, Augmented Reality, fremtidens teknologi og innovation. Uanset om det er for en virksomhed, en konference eller en uddannelsesinstitution, skræddersyr Morten sit indhold til dit publikum. Hans foredrag og workshops er designet til at levere maksimal værdi og indsigt.<br><br>Hvad tidligere kunder siger:<br>"Morten Haulik formåede at fange vores publikums opmærksomhed fra første øjeblik. Hans viden og entusiasme for VR og AR er smittende og inspirerende." – Jens Jensen, Teknologikonference<br>"Morten leverede en fantastisk workshop, der virkelig åbnede vores øjne for mulighederne inden for VR og AR. Hans praktiske tilgang og dybe indsigt gjorde en kæmpe forskel for vores team." – Anna Andersen, Innovationschef`,
        konsulent: `XR Konsulent – Udvikling af Fremtidens Løsninger`,
        konsulentContent: `Som erfaren XR-konsulent hjælper Morten Haulik virksomheder med at udvikle og implementere avancerede XR-løsninger, der lever op til de højeste standarder inden for feltet. Med en dyb forståelse af både teknologien og markedet kan Morten guide dit team gennem hele udviklingsprocessen – fra koncept til færdigt produkt. Hans ekspertise sikrer, at jeres XR-løsninger ikke kun er innovative, men også praktiske og bæredygtige. <a href="mailto:BookMortenHaulik@gmail.com">Klik her</a> for at komme i kontakt med Morten.`,
        baggrund: `Baggrund`,
        baggrundContent: `Morten Haulik startede sin rejse i teknologiens verden, mens han studerede Informationsvidenskab på Københavns Universitet. Et hobbyprojekt, hvor han byggede et hjemmebygget Virtual Reality-headset, gik viralt på Facebook og åbnede dørene til en karriere hos Khora Virtual Reality, Europas første VR-produktionsselskab.<br>Siden da har Morten været en fremtrædende figur i det danske startup- og teknologilandskab. I sin nuværende rolle som Entrepreneur in Residence hos Københavns Universitet Lighthouse hjælper han studerende med at omdanne deres forskning til succesfulde startups.`,
        mentor: `Mentor og Dommer`,
        mentorContent: `Morten bidrager som mentor og dommer i forskellige innovations- og entreprenørskabsprogrammer, herunder:<br>Fonden for Entreprenørskab<br>Københavns Universitet<br>Alumni<br>Morten har også været involveret i:<br>Founders of Tomorrow<br>Roche NewGen Challenge<br>Venture Cup<br>Tag Order, Dagbladet Information<br>Health Innovators`,
        podcast: `Podcast Deltagelser`,
        podcastContent: `Morten har deltaget som ekspert i en række podcasts, hvor han deler sin indsigt og diskuterer de nyeste trends inden for VR, AR og teknologi.`,
        folg: `Følg Morten Haulik`,
        folgContent: `Hold dig opdateret med Mortens seneste projekter og indsigter ved at følge ham på LinkedIn og Twitter.`
    };

    const englishContent = {
        om: `About Morten Haulik`,
        omContent: `Morten Haulik is a leading expert in Virtual Reality (VR), Augmented Reality (AR), and Extended Reality (XR), based in Copenhagen. Over the past decade, Morten has worked professionally with VR and AR, earning recognition both nationally and internationally. He has contributed as an expert to prominent media outlets such as Ekstrabladet, Jyllandsposten, Børsen, Ingeniøren, Radio4, DR, Berlingske, and many others. He also played a key role in producing the VR episode for DR2’s "So Ein Ding".`,
        book: `Book Morten as a Keynote Speaker or Presenter`,
        bookContent: `Looking for insights into the latest trends and developments in VR, AR, and XR? Want to inspire your team or audience with cutting-edge knowledge? Book Morten Haulik as a keynote speaker or presenter. Morten delivers engaging and informative presentations that both inspire and challenge audiences. <a href="mailto:BookMortenHaulik@gmail.com">Click here</a> to book a talk now!`,
        bestil: `Book a Talk or Workshop with Morten Haulik`,
        bestilContent: `Morten offers talks and workshops on topics like Virtual Reality, Augmented Reality, future technology, and innovation. Whether it's for a company, a conference, or an educational institution, Morten tailors his content to your audience. His presentations and workshops are designed to provide maximum value and insight.<br><br>What Clients Are Saying:<br>"Morten Haulik captivated our audience from the very first moment. His knowledge and enthusiasm for VR and AR are both infectious and inspiring." – Jens Jensen, Tech Conference<br>"Morten delivered an outstanding workshop that really opened our eyes to the possibilities within VR and AR. His practical approach and deep insight made a significant impact on our team." – Anna Andersen, Head of Innovation`,
        konsulent: `XR Consultant – Developing Future Solutions`,
        konsulentContent: `As an experienced XR consultant, Morten Haulik assists companies in developing and implementing advanced XR solutions that meet the highest industry standards. With a deep understanding of both the technology and the market, Morten can guide your team through the entire development process—from concept to finished product. His expertise ensures that your XR solutions are not only innovative but also practical and sustainable. <a href="mailto:BookMortenHaulik@gmail.com">Click here</a> to get in touch with Morten.`,
        baggrund: `Background`,
        baggrundContent: `Morten Haulik began his journey into the world of technology while studying Information Science at the University of Copenhagen. A hobby project, where he built a homemade Virtual Reality headset, went viral on Facebook, leading to a career opportunity with Khora Virtual Reality, Europe's first VR production company.<br>Since then, Morten has been a prominent figure in the Danish startup and tech landscape. In his current role as Entrepreneur in Residence at the University of Copenhagen Lighthouse, he helps students turn their research into successful startups.`,
        mentor: `Mentor and Judge`,
        mentorContent: `Morten serves as a mentor and judge in various innovation and entrepreneurship programs, including:<br>Fonden for Entreprenørskab<br>University of Copenhagen<br>Alumni<br>Morten has also been involved in:<br>Founders of Tomorrow<br>Roche NewGen Challenge<br>Venture Cup<br>Tag Order, Dagbladet Information<br>Health Innovators`,
        podcast: `Podcast Appearances`,
        podcastContent: `Morten has appeared as an expert in numerous podcasts, sharing his insights and discussing the latest trends in VR, AR, and technology.`,
        folg: `Follow Morten Haulik`,
        folgContent: `Stay updated with Morten’s latest projects and insights by following him on LinkedIn and Twitter.`
    };

    const sections = {
        om: document.getElementById('om'),
        book: document.getElementById('book'),
        bestil: document.getElementById('bestil'),
        konsulent: document.getElementById('konsulent'),
        baggrund: document.querySelector('section:nth-of-type(5)'),
        mentor: document.querySelector('section:nth-of-type(6)'),
        podcast: document.querySelector('section:nth-of-type(7)'),
        folg: document.querySelector('section:nth-of-type(8)')
    };

    const updateContent = (content) => {
        sections.om.querySelector('h2').textContent = content.om;
        sections.om.querySelector('p').innerHTML = content.omContent;
        sections.book.querySelector('h2').textContent = content.book;
        sections.book.querySelector('p').innerHTML = content.bookContent;
        sections.bestil.querySelector('h2').textContent = content.bestil;
        sections.bestil.querySelector('p').innerHTML = content.bestilContent;
        sections.konsulent.querySelector('h2').textContent = content.konsulent;
        sections.konsulent.querySelector('p').innerHTML = content.konsulentContent;
        sections.baggrund.querySelector('h2').textContent = content.baggrund;
        sections.baggrund.querySelector('p').innerHTML = content.baggrundContent;
        sections.mentor.querySelector('h2').textContent = content.mentor;
        sections.mentor.querySelector('p').innerHTML = content.mentorContent;
        sections.podcast.querySelector('h2').textContent = content.podcast;
        sections.podcast.querySelector('p').innerHTML = content.podcastContent;
        sections.folg.querySelector('h2').textContent = content.folg;
        sections.folg.querySelector('p').innerHTML = content.folgContent;
    };

    let isEnglish = false;
    document.getElementById('toggleLanguage').addEventListener('click', (event) => {
        event.preventDefault();
        if (isEnglish) {
            updateContent(danishContent);
            event.target.textContent = 'English';
        } else {
            updateContent(englishContent);
            event.target.textContent = 'Dansk';
        }
        isEnglish = !isEnglish;
    });

    const hoverSound = document.getElementById('hoverSound');
    const clickSound = document.getElementById('clickSound');
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('mouseover', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
        link.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play();
        });
    });
});
