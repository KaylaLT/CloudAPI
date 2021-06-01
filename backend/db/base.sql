CREATE EXTENSION IF NOT EXISTS citext;

DROP TABLE IF EXISTS apis;
CREATE table apis(
id SERIAL PRIMARY KEY,
name citext NOT NULL,
description citext NOT NULL,
url text UNIQUE NOT NULL,
category citext NOT NULL,
auth boolean, 
cors boolean
);
INSERT INTO public.apis VALUES (1, 'Dog Facts', 'Random dog facts', 'https://dukengn.github.io/Dog-facts-API/', 'animals', false, NULL);
INSERT INTO public.apis VALUES (2, 'CatFacts', 'Daily cat facts', 'https://alexwohlbruck.github.io/cat-facts/', 'animals', false, false);
INSERT INTO public.apis VALUES (3, 'Cats', 'Pictures of cats from Tumblr', 'https://docs.thecatapi.com/', 'animals', true, NULL);
INSERT INTO public.apis VALUES (4, 'catAPI', 'Random pictures of cats', 'https://github.com/ThatCopy/catAPI/wiki/Usage', 'animals', false, true);
INSERT INTO public.apis VALUES (5, 'Cataas', 'Cat as a service (cats pictures and gifs)', 'https://cataas.com', 'animals', false, NULL);
INSERT INTO public.apis VALUES (6, 'Dogs', 'Based on the Stanford Dogs Dataset', 'https://dog.ceo/dog-api/', 'animals', false, true);
INSERT INTO public.apis VALUES (7, 'HTTPCat', 'Cat for every HTTP Status', 'https://http.cat/', 'animals', false, true);
INSERT INTO public.apis VALUES (8, 'IUCN', 'IUCN Red List of Threatened Species', 'http://apiv3.iucnredlist.org/api/v3/docs', 'animals', true, NULL);
INSERT INTO public.apis VALUES (9, 'Movebank', 'Movement and Migration data of animals', 'https://github.com/movebank/movebank-api-doc', 'animals', false, NULL);
INSERT INTO public.apis VALUES (10, 'RandomCat', 'Random pictures of cats', 'https://aws.random.cat/meow', 'animals', false, true);
INSERT INTO public.apis VALUES (11, 'Randomdog', 'Random pictures of dogs', 'https://aws.random.dog/bark', 'animals', false, true);
INSERT INTO public.apis VALUES (12, 'RescueGroups', 'Adoption', 'https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home', 'animals', false, NULL);
INSERT INTO public.apis VALUES (13, 'Shibe.Online', 'Random pictures of Shiba Inu, cats or birds', 'https://shibe.online/', 'animals', false, true);
INSERT INTO public.apis VALUES (14, 'AniList', 'Anime discovery & tracking', 'https://github.com/AniList/ApiV2-GraphQL-Docs', 'Anime', true, NULL);
INSERT INTO public.apis VALUES (15, 'AnimeChan', 'Anime quotes (over 10k+)', 'https://github.com/RocktimSaikia/anime-chan', 'Anime', false, false);
INSERT INTO public.apis VALUES (16, 'AnimeNewsNetwork', 'Anime industry news', 'https://www.animenewsnetwork.com/encyclopedia/api.php', 'Anime', false, true);
INSERT INTO public.apis VALUES (17, 'Jikan', 'Unofficial MyAnimeList API', 'https://jikan.moe/', 'Anime', false, true);
INSERT INTO public.apis VALUES (18, 'Kitsu', 'Anime discovery platform', 'https://kitsu.docs.apiary.io/', 'Anime', true, false);
INSERT INTO public.apis VALUES (19, 'MyAnimeList', 'Anime and Manga Database and Community', 'https://myanimelist.net/clubs.php?cid=13727', 'Anime', true, NULL);
INSERT INTO public.apis VALUES (20, 'Waifu.pics', 'Image sharing platform for anime images', 'https://waifu.pics/docs', 'Anime', false, false);
INSERT INTO public.apis VALUES (21, 'What Anime', 'Scan anime image to get specific detail', 'https://soruly.github.io/trace.moe/#/', 'Anime', false, true);
INSERT INTO public.apis VALUES (22, 'AbuseIPDB', 'IP/domain/URL reputation', 'https://docs.abuseipdb.com/#introduction', 'Anti-Malware', true, NULL);
INSERT INTO public.apis VALUES (23, 'Google Safe Browsing)', 'Google Link/Domain Flagging', 'https://developers.google.com/safe-browsing/', 'Anti-Malware', true, NULL);
INSERT INTO public.apis VALUES (24, 'URLhaus', 'Bulk queries and Download Malware Samples', 'https://urlhaus-api.abuse.ch/', 'Anti-Malware', false, NULL);
INSERT INTO public.apis VALUES (25, 'URLScan.io', 'Scan and Analyse URLs', 'https://urlscan.io/docs/api/', 'Anti-Malware', true, NULL);
INSERT INTO public.apis VALUES (26, 'VirusTotal', 'VirusTotal File/URL Analysis', 'https://developers.virustotal.com/reference', 'Anti-Malware', true, NULL);
INSERT INTO public.apis VALUES (27, 'Art Institute of Chicago', 'Art', 'https://api.artic.edu/docs/', 'Anti-Malware', false, true);
INSERT INTO public.apis VALUES (28, 'ColourLovers', 'Get various patterns, palettes and images', 'http://www.colourlovers.com/api', 'Art & Design', false, NULL);
INSERT INTO public.apis VALUES (29, 'Cooper Hewitt', 'Smithsonian Design Museum', 'https://collection.cooperhewitt.org/api', 'Art & Design', true, NULL);
INSERT INTO public.apis VALUES (30, 'Dribbble', 'Design', 'https://developer.dribbble.com/v2/', 'Art & Design', true, NULL);
INSERT INTO public.apis VALUES (31, 'Europeana', 'European Museum and Galleries content', 'https://pro.europeana.eu/page/search', 'Art & Design', true, NULL);
INSERT INTO public.apis VALUES (33, 'Harvard Art Museums', 'Art', 'https://github.com/harvardartmuseums/api-docs', 'Art & Design', true, NULL);
INSERT INTO public.apis VALUES (34, 'Iconfinder', 'Icons', 'https://developer.iconfinder.com/reference/overview-1', 'Art & Design', true, NULL);
INSERT INTO public.apis VALUES (35, 'Icons8', 'Icons', 'https://icons8.docs.apiary.io/#reference/0/meta', 'Art & Design', true, NULL);
INSERT INTO public.apis VALUES (36, 'Metropolitan Museum of Art', 'Met Museum of Art', 'https://metmuseum.github.io/', 'Art & Design', false, NULL);
INSERT INTO public.apis VALUES (37, 'Noun Project', 'Icons', 'http://api.thenounproject.com/index.html', 'Art & Design', false, NULL);
INSERT INTO public.apis VALUES (38, 'Pixel Encounter', 'SVG Icon Generator', 'https://pixelencounter.com/api', 'Art & Design', false, false);
INSERT INTO public.apis VALUES (39, 'Rijksmuseum', 'Art', 'https://www.rijksmuseum.nl/en/research/conduct-research/data', 'Art & Design', true, NULL);
INSERT INTO public.apis VALUES (40, 'Bhagavad Gita', 'Bhagavad Gita text', 'https://bhagavadgita.io/api/', 'Books', true, true);
INSERT INTO public.apis VALUES (41, 'Bible', 'RESTful Bible API with 7 versions, 4 languages and multiple features', 'https://bibleapi.co/', 'Books', true, NULL);
INSERT INTO public.apis VALUES (42, 'British National Bibliography', 'Books', 'https://bnb.data.bl.uk/', 'Books', false, NULL);
INSERT INTO public.apis VALUES (43, 'Crossref Metadata Search', 'Books & Articles Metadata', 'https://github.com/CrossRef/rest-api-doc', 'Books', false, NULL);
INSERT INTO public.apis VALUES (44, 'Google Books', 'Books', 'https://developers.google.com/books/', 'Books', true, NULL);
INSERT INTO public.apis VALUES (45, 'LibGen', 'Library Genesis search engine', 'https://garbage.world/posts/libgen/', 'Books', true, NULL);
INSERT INTO public.apis VALUES (46, 'New York Times Books', 'Book reviews and The New York Times Best Sellers lists', 'https://developer.nytimes.com/docs/books-product/1/overview', 'Books', true, NULL);
INSERT INTO public.apis VALUES (47, 'Open Library', 'Books, book covers and related data', 'https://openlibrary.org/developers/api', 'Books', false, false);
INSERT INTO public.apis VALUES (48, 'Penguin Publishing', 'Books, book covers and related data', 'http://www.penguinrandomhouse.biz/webservices/rest/', 'Books', false, true);
INSERT INTO public.apis VALUES (49, 'Quran', 'RESTful Quran API with multiple languages', 'https://quran.api-docs.io/v4/getting-started', 'Books', false, true);
INSERT INTO public.apis VALUES (50, 'Rig Veda', 'Gods and poets, their categories, and the verse meters, with the mandal and sukta number', 'https://aninditabasu.github.io/indica/html/rv.html', 'Books', false, NULL);
INSERT INTO public.apis VALUES (51, 'Shrimad Bhagavad Gita', 'Open Source Shrimad Bhagavad Gita API including 21+ authors translation in Sanskrit/English/Hindi', 'https://vedicscriptures.github.io/', 'Books', false, true);
INSERT INTO public.apis VALUES (52, 'Thirukkural', '1330 Thirukkural poems and explanation in Tamil and English', 'https://api-thirukkural.web.app//', 'Books', false, true);
INSERT INTO public.apis VALUES (53, 'Vedic Society', 'Descriptions of all nouns (names, places, animals, things) from vedic literature', 'https://aninditabasu.github.io/indica/html/vs.html', 'Books', false, NULL);
INSERT INTO public.apis VALUES (54, 'Charity Search', 'Non-profit charity data', 'http://charityapi.orghunter.com/', 'Business', true, NULL);
INSERT INTO public.apis VALUES (55, 'Clearbit Logo', 'Search for company logos and embed them in your projects', 'https://clearbit.com/docs#logo-api', 'Business', true, NULL);
INSERT INTO public.apis VALUES (56, 'Domainsdb.info', 'Registered Domain Names Searcha', 'https://domainsdb.info//', 'Business', true, NULL);
INSERT INTO public.apis VALUES (57, 'Freelancer', 'Hire freelancers to get work done', 'https://developers.freelancer.com//', 'Business', true, NULL);
INSERT INTO public.apis VALUES (58, 'Gmail', 'Flexible, RESTful access to the users inbox', 'https://developers.google.com/gmail/api/', 'Business', true, NULL);
INSERT INTO public.apis VALUES (63, 'Google Analytics', 'Collect, configure and analyze your data to reach the right audience', 'https://developers.google.com/analytics/', 'Business', true, NULL);
INSERT INTO public.apis VALUES (64, 'mail.tm', 'Temporary Email Service', 'https://docs.mail.tm/', 'Business', false, true);
INSERT INTO public.apis VALUES (65, 'MailboxValidator', 'Validate email address to improve deliverability', 'https://www.mailboxvalidator.com/api-email-free', 'Business', true, NULL);
INSERT INTO public.apis VALUES (66, 'mailgun', 'Email Service', 'https://www.mailgun.com/', 'Business', true, NULL);
INSERT INTO public.apis VALUES (67, 'markerapi', 'Trademark Search', 'https://markerapi.com/', 'Business', false, NULL);
INSERT INTO public.apis VALUES (68, 'SwiftKanban', 'Kanban software, Visualize Work, Increase Organizations Lead Time, Throughput & Productivity', 'https://www.digite.com/swiftkanban/', 'Business', true, NULL);
INSERT INTO public.apis VALUES (69, 'Ticksel', 'Friendly website analytics made for humans', 'https://www.ticksel.com/', 'Business', false, NULL);
INSERT INTO public.apis VALUES (70, 'Trello', 'Boards, lists and cards to help you organize and prioritize your projects', 'https://developer.atlassian.com/cloud/trello/', 'Business', true, NULL);
