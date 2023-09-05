const eightBitCLUT = `
10000000 09000000 0C020000 0000E001 00010100 00007B6F 4936AA3A D656CC42 E83A7847
ED46082E C729596B 072E462E 8836366F EF4E461D 8625B232 763F9256 BD77D06E D33A2519
10328C29 B4427537 B12A8821 7A5B1253 7953723A 2E2ACE31 6C3ECD35 50324F56 AA212D56
CC295B4F 49256E42 F26EB026 0A437B53 113A752F EE39B54A CB553663 0D331643 746F4E6E
EA2D153B 18573232 30427A63 5342724A 345BE410 75361437 D64E7427 3B477143 B6469021
194F7327 0D26364B 904A703F AF1E6A29 AE210922 C821906E 0E424A2A 943EB63E 6E211863
8B2A2F3B 0819AF52 395B0B2A 0A192E4A 4C326C21 E9108E36 9C63504A 2C3A0C32 87198B31
F842CC2E F462CC41 734B4E26 741F4615 AA3DD229 4F3E4A1D 4C1DCB1D 3A53F529 B225E610
2C19EC49 132F8D32 4922AF16 0C2F7873 D021FA3E 5053D83E C71DE618 1432B162 A20C563A
8F2E9553 8C1D8A26 CF3A4E4F A9224815 AA55B425 D03E0721 711F124B 2D1E0E1E D24A3143
19476935 7642552E 4E1E7026 8A4D4839 A414CA26 57538A15 F3313732 52576941 10264D4B
35678515 B8466B27 342EEB15 74177222 6E624C2F 681F343A AE0E0729 721E7837 CB49AD16
CB398F66 A70C4A15 101AFF7F 583AB26E 93213323 8F3BA616 34269A4F F662650F 07313123
2A27B326 3C5B6617 1226071E 0F477333 D632B42A 36336E15 B426B836 C81E3367 D15ACE15
55430A0D 982F0B42 2E19F42E AC152739 671A9273 6C15F146 121F182E 4A1E0000 00000000
31004F00 00000000 16161616 16161616 16161616 16161616 16161616 16161616 16161616
16161616 16161616 16161616 16161616 16161616 16161616 16161616 16161616 16161616
16161616 16161616 16010101 0B0B0B0B 0B0B0101 011616D3 00000000 00000000 00000101
01010101 01010101 01010101 0B010101 01010101 01010101 01010101 01010101 01010101
01010101 01010101 01010101 01010101 01010101 01010101 01010101 010B6161 DC040404
04040404 04040404 04040404 04610000 00000000 00000000 01010101 0B610B61 61014343
0B393939 390B0101 01010101 01010101 01010101 0B610B01 01010101 010B0B0B 01010101
01010101 0B394639 390B0143 43430B61 61DC0404 04040404 04040404 04040404 04040404
040404DC 00000000 00000000 00000101 0B393936 71275C04 43225446 46212121 21462121
21219010 90212121 21A82F2F 2F5421E6 32081008 10212121 21214639 39211008 080810B8
221A1C23 2773451C 44254204 04040404 45454545 45370404 04040404 04DC0000 00000000
00000000 01013939 46217173 6F6F1C22 28702121 10100808 10101008 06060606 06050503
26260202 0E0E0E06 32080810 10101010 10103208 08320808 1010282A 232E5C57 181C2C25
7E545426 02020902 02020226 2F370404 040404DC 00000000 00000000 000B0101 39212146
A827426F 5C361C24 70900805 26030505 08323206 06063205 05052626 0202020E 0E0E0332
32081021 21101008 32050303 03082F2A 2A281F3E 272C1C23 1F6A2F26 02090202 02020202
26262626 04040404 04040000 00000000 00000001 01010121 21212126 3E714236 421A3E02
05260202 03030505 06320632 32320505 03060202 0D0E0D0E 03323232 BB080A26 10080503
0E020202 192C232A 57271B18 237F3E2F 2F020202 02020D0D 0D0D0202 26022F04 04040404
00000000 00000000 00010101 01462121 109D080C 71183669 1A3E0212 0A0A090E 03050505
32320632 32323206 06030E0E 0E060632 32320E09 6A3E2F10 08320E02 02196428 1B2E69C9
7E5E2C2C 7E542602 02090909 0D0D0D0D 0D0D0202 2F040404 04040000 00000000 00000001
0101010B 10100808 BBBB0C28 28454223 0A191111 09020305 05080806 060E0D03 32060632
32060606 06063232 12594D62 19080832 0E090A19 2C232E77 CCAB4423 7F1A7E54 2F260909
09090C0D 0D0D0D0D 0D022F04 04040404 00000000 00000000 00010101 01393232 32060632
320A2836 69696F3E 19091102 02020303 05050A6A A9710908 32323232 06060606 32320959
3A755A08 08050209 12192418 2E877C7C 232C6B7E 2F2F2602 0A0A0A0A 0C0C0D0D 0D0D090C
26040404 04040000 00000000 00000001 01010139 06323206 06063205 26716969 695C3E11
11091202 02020305 0A6A5567 0A050832 32320606 06050802 1F896254 36020805 0202111F
28182777 7CAB236B 1B7E2F2F 26090A12 12120A0C 0C0C0C0C 09090937 04040404 00000000
00000000 00010101 010B3232 32320632 0508050A 155C6929 CE3E7B19 12020202 05025963
635D5A05 05053203 03030505 0526713E 1F122605 08260209 192C2813 28737C1B 5E1B252F
2F260209 0A0A1212 120A0A0A 0A0A0C02 0C2F0404 04040000 00000000 00000001 0101010B
9D320810 05050505 050A7EB4 3669692F 52190909 0A020212 9B757562 11020508 05032626
02262602 03021109 10080502 023E8524 981E1E57 77271C23 1B2F2F26 02090A12 12120A12
12121212 0A0C0C09 2F040404 00000000 00000000 00010101 0B464621 10100805 0505050A
2C535371 1542A224 1F120A02 020909BD 195A5408 08050303 02020202 02020305 05030503
02023E11 9F981E1E 79AB5C27 1C1C1B3E 2F2F2609 0C0A1212 11121112 12120A0C 0C090254
0404DC00 00000000 00000001 01013921 46212110 08050505 05022A3B 14791836 1C182C72
09020226 100A1105 0805030E 0E0E0202 09090909 02020202 09020A0A 191F521E 1E1E2A69
7C701C1C 23113E2F 2F020C0C 0C121919 19121212 0A0C0909 0C2F0404 DC000000 00000000
00010101 39212121 10080808 05050502 2C3FE7E7 244242A8 1C289F0A 02262F05 03030202
0202020A 0C0C0A11 0A120909 120A0A12 192A2C24 981E1E81 2769AB54 1C1C2319 3E707002
0202090C 0C0A0A12 120A0C0C 09090254 0404DC00 00000000 00000016 01014610 21100508
08080805 08031F18 8835491A 6F774653 411F3E26 2F080502 020C0A0A 0A120A11 12471247
19111112 11192C23 1AAF3131 1EB57077 CE1C1C1C 2C2E3E09 09090202 02090C0C 0C0C0C0C
09020202 02040404 DC000000 00000000 0001010B 10080832 06320810 08050805 0A2C3F51
1D796929 29533F13 2C9F6767 6A090912 0A121919 11111919 1F2A7171 71712424 2823131E
311E1E81 4227361C 181C362E 11120A0A 0A090909 09090C09 09090909 09264504 0404DC00
00000000 00000001 0B211008 06060606 32080505 0505027B 13353531 73307746 F23F3F13
522A2A9F 72199F1F 1F9F2C2A 24131818 1C3B3B3B 3B131818 131E1E13 18366F73 251C181C
23641119 11120A0A 0909090A 09090909 09090909 26540404 04000000 00000000 00014621
10080306 06060305 05050202 0209A635 51FEC90F 7C152207 1414F218 28282424 52249898
133F3B3F 18181C40 20225318 18181818 18181C5C 4227251C 1C371C25 85111111 11195A7B
19190211 120A0909 02020226 2F040400 00000000 00000001 21211008 030E0E0E 02030202
09120211 2A1D3535 CE768715 0B1C2207 491E1E28 24281C1C 181C1818 231A1A34 34444423
28242452 2C525224 45425C36 251C1C1C 1C232564 19111947 9F1F1F19 1F191111 120A0202
26262F37 04000000 00000000 00014610 10080302 02020909 02091212 0A192407 14134573
7C27272E 04374148 48485E48 48484841 415E4E44 5E5E5E48 41E48E80 80608E1A 1A251B25
69272C25 34341A1A 1A1A2323 28242424 24522A9F 7B471919 120A0926 54040400 00000000
00000001 0B210810 08050302 09090A0A 0A471128 3B07206F 93643645 444A404E C7C74141
235E5F5F 5F5F5F5E 1A284949 498831AE A6819A9A 2C2C2C1B 34366973 57344A37 5E5E3425
2523441C 1C181818 1328242A 1F1F9F2A 67230404 04000000 00000000 00010121 08080808
03020202 09111219 28183F20 01443482 40404A44 344440A8 18531C23 28234544 239888E7
51515151 E7355131 31311E18 181C4536 77365C27 27252525 251A418E 581B251B 25251A1A
AF1E1E28 2828231C 37040400 00000000 00000B01 01210808 08050502 0202020A 196A1318
B40B345E 82343657 B296236E A55A5A6D DBDB2222 4322221D E7E7E7E7 E75151A4 A456CDCD
3118181C 3636276F 04442323 23232325 6BE4ADAD ADAD485E 411A1BD1 A7C3E918 1C370404
04000000 00000000 01010121 05080808 10080303 0A125298 1353B434 5E2D1AA3 A357931A
1CB42A5D 75725207 07072022 22F21DE7 E7E75151 A4A4A4CD CDCD3118 1837AB69 7C421C13
181C1C1C 44374225 25588E8E 1A1A1A23 48418E58 9A583437 04040400 00000000 00000101
01210308 05081010 0808051F 52283B07 255F2D25 37453604 151C20B4 2AE58CBD 2A070707
22222222 0714E751 51A4A4A4 A456CD31 131854B1 7C29AB7E 1331792C 1B2A1F2E 57273627
36367E34 341A2C58 8EE4E4E4 581A4A04 04DC0000 00000000 01010121 03323205 05896308
10718113 5323412D 8E232222 B436BC69 23221A59 5A1F18DB 07070722 07140714 35E7E751
51515151 1E181C54 B1AB297C 731C1E56 C13E2F26 02023E09 0A09120A 3E717023 2323282C
581A485F 370404DC 00000000 00000101 01213206 060E675D 596DE63E 7F133B25 82C71ADB
07070714 27306936 43256428 5353B466 07DB2207 07070714 141D1D1D 14144913 1CAB7C29
B927181C 1356C19F 67020909 0902020E 02267071 3E1F1F2A 1A181813 231C3704 04DC0000
00000000 01010139 06060612 5AD875A3 9C6A7F18 4E252025 18DB141D 0707712B 0FAB36DC
231C3737 4534B618 22222207 07070714 1D14141D 491C277C C4CC571C 181C1356 CD1F9F67
090A0A09 020D0202 02022626 2609A32E 2C281C37 040404DC 00000000 00000101 010BBB06
320C923A 9242A5A2 2C183B1A 331A5E07 07070707 FD7C9595 9336AC44 4437BED4 B783413B
07070707 3B3B1414 14072045 AB292B73 1C1C1818 18131E79 9F7B5A11 1212090C 09020202
02260202 02090A0A 57420404 04040000 00000000 01010139 32323211 9E635D36 A5A26B3B
3B1A3341 4E332214 1407532B 7C307C2E ACBEBEBE D4D4D4D4 A14F6060 606B6B58 1B253445
45A38795 B1571C5E 5E18181C 1898241F B2701111 0A0A0A09 02020902 0D0D0D0E 26267042
04040404 00000000 00000101 01B80632 3212593A 5A27FD7E 7F3B1C23 331A5EE2 6F6DF207
DB46CC29 695C6B7D D4B7B7B7 C74F4F60 F686604F 7D948484 F64F6857 C429C92E 6B7F8068
689A1A1A 24241F1F 19121912 120A0A0A 0C0D0D0D 0D0D0D02 022F0404 04040000 00000000
010101B8 3232083E 572E2742 FD6D2C53 1C412D48 345E7E71 372207DB A87C7673 4F8686F6
F6804F80 83D6A184 834FB660 8660604F 2776D529 A368606B 60686880 6C686885 1F2C1119
1111190A 0A0A0D0D 0D0D0D0D 0D0E0203 54040404 00000000 00000101 01211090 2110426F
21397157 1B4E4A41 2D5F251B 89621B07 0707B436 BC156F25 576B6868 4F253442 6F6F6F6F
15151515 6F150F0F 0F766927 36273627 2736576B 6886867F 2E111111 1112120A 0C0C0C0C
0D0D0D0D 02025404 04040000 00000000 01010B10 2121213E 2E70B82F 25AC4F86 B6342D91
572A75B3 2C490707 0727760F 0F0F7615 2995BC0F 0F0F0F0F 0F0F0F0F 0F0F0F0F 0F0F0F0F
76151515 15151515 15296973 64686B2E 71641F19 110A1212 0A0A0C0D 0D0D0D09 26040404
00000000 00000101 46102121 3E3E4D5A 2F42C794 4F606B34 2D74579F 3A622749 07070757
760F0F0F 0F0F0F0F 0F0F0F0F 0F303030 17171717 17173030 30300F15 15151515 15151515
15156F57 6C2E2824 641F1111 0A120A0A 0A0C0D0D 0C022645 04040000 00000000 01012110
21213E5A 55593704 B683D6EB 64502D91 252AA97E 1A140714 232E760F 0F0F0F0F 0F0F0F0F
0F301717 17171717 17171717 17171717 17951515 15151515 15151515 15152764 23282A1F
11470A0A 0A0A0A0A 0C0C0C09 02450404 00000000 00000101 10102110 1262D875 2A361B4F
F6F63633 4C1A1C71 64571C07 07AF3627 760F0F0F 0F0F0F0F 0F303017 17171717 17171717
17171717 17171717 C4291515 15151515 15151515 15AB2328 242A1947 0A0A1212 12120A0A
0C0C0204 04040000 00000000 01391010 1008BD62 3A925725 6B4FD668 36335025 403B2E25
07DB1827 45730F0F 0F0F0F0F 0F0F3017 17171717 17171717 17171717 17171717 1717172B
29151515 15151515 151515C9 42182424 2C851912 12121212 120A0902 26040404 DC000000
00000146 05323203 72725A11 7E571B84 83605E33 2323073B 23183FF2 24735C76 0F0F0F0F
0F0F3030 17171717 17171717 17171717 17171717 17171717 1717C42B 15151515 15151515
15A35736 1C132824 2A1F1912 11120A0A 09025404 0404DC00 00000000 01103232 32061057
2E70540A 1B868386 91332C18 07533B3F F2147FC9 BC0F0F0F 0F0F0F30 30301717 17171717
17171717 17303017 17171717 17171717 17C42B15 15151515 15151573 2E682718 13242424
2A9F1919 11120A0A 7E370404 04000000 00010108 32323206 2110A82F 2F121B94 68688F2D
2C3F0714 14140707 9F158D0F 0F0F0F0F 0F303017 17171717 17171730 175B3D5B 5B303017
17171717 17171717 C42B1515 15151515 15699325 85281823 AE795252 2C2A1147 47192C23
0404DC00 00000001 01080808 08082170 3E265402 7340577F 8F4C1A3F 07141407 14072476
0F0F0F0F 0F0F3030 17171717 17171717 175B3D5B 5B3D3D3D 30301717 17171717 171717C4
2B291515 15151515 692ED0BA 18181E31 79797979 28242424 28230404 04000000 00010B10
10100810 7E71895A 702F192E 25258F4C 1A3BDB14 14141D14 23150F0F 0F0F0F30 30171717
17171717 17173D3D 3D3D3D3D 3D3D5B0F 17171717 17171717 17179529 2B151515 15151545
688E1818 18133156 56561E13 28AF2804 04040400 00000001 0B081008 102F113A 3ABD1208
11235325 AA2D423B 07141451 51511B29 0F0F0F0F 30303017 17171717 1717173D 3D3D3D3D
3D3D3D3D 3D300F17 17171717 17171717 30952929 15151515 1515272A 18181813 31315656
31131E13 04040404 04000000 00010B08 10081008 119B8CE5 0A081128 1C1A8282 42B4071D
51A4A431 576F0F0F 0F0F3030 17171717 17171717 3D3D3D3D 3D3D3D3D 3D3D3D3D D5303017
17171717 17171730 95291515 15151515 692A1818 131E1E31 56565631 31183704 04040400
00000001 01211010 102F72B3 8C3A7305 3E2C3B24 50503666 1451A451 A42C5715 0F0F0F0F
30301717 17171717 17173D3D 5B3D3D3D 3D3D3D3D 3D3D3D3D 5B301717 17171717 17171730
76151515 1515772C 18181813 1E5656CD CDCDCD56 131C0404 04000000 00010146 08080826
5A723E1F 0A020911 281A8250 250B1451 A4A4DF57 5C0F0F0F 0F0F3030 17171717 1717175B
3D3D3D3D 3D3D3D3D 3D3D3D3D 3D3D5BD5 17301717 17171717 17308D76 15151515 5C2C1818
135656CD CDCDCD56 3113181C 04040400 00000001 01210808 08080812 73570202 02122E36
404C5866 0735A451 DF2E768D 0F0F0F0F 0F173017 17171717 175B3D5B 3D3D3D3D 3D3D3D3D
3D3D3D3D 5B5B3030 17171717 17171730 8D8DBC15 1515692A 18181E31 56CD5656 56561E1E
1E1C0404 04000000 00010121 06323208 08052F26 09020209 11934A4C C0372014 3551DF42
8D0F0F0F 0F0F3017 30171717 17171717 5B3D3D3D 3D3D3D3D 3D3D3D3D 3D3D5B5B D50F3017
17171717 17308D8D 0F0F7615 15732318 131E3156 5656CDCD AEAEAE1C 04040400 00000016
01100E32 32050810 10020202 02090247 362D5F41 6E07141D 1E6F8D0F 0F0F0F0F 30303017
17171717 17D55B3D 3D3D3D3D 3D3D3D3D 3D3D3D3D 3D5B3030 30171717 17171717 0F8D8D8D
8D0F1573 361A2525 2C1B1B2C 2C2C1B2C 25440404 04000000 00010B05 03030505 08080302
02090212 0A195782 82256622 14144942 0B8D0F0F 0F0F3030 30171717 171730D5 5B3D3D3D
3D3D3D3D 3D3D3D3D 3D3D3D3D 30303030 17171717 1730BCBC BC156F6F 5C272727 27363642
4445374A 0404044A 040404DC 00000001 46030503 03030E0E 0D090909 1212191F 231A334E
34201407 14376F0F 0F0F0F0F 30301717 17173030 D55B5B3D 3D3D3D3D 3D3D3D3D 3D3D3D3D
5B5B300F 3095C42B 87876F45 37373704 40406640 401C2334 34341A25 25252525 36450404
04DC0000 00012103 0503030E 02020C09 09091212 116AF252 5E6E3445 22071420 42760F0F
0F0F3030 17173017 3030D53D 3D3D3D3D 3D3D3D3D 3D3D3D5B 5B3D3D95 04372773 36374066
66664040 4A443425 1B1B2524 2879A652 24282898 AF792804 040404DC 00000001 08050505
030E0E02 02020C02 0C192AA2 14495282 5034B407 07DB4276 0F0F0F0F 30303030 30303030
5B5B3D3D 3D3D3D3D 3D3D3D3D 38A0CC77 6F454437 40666640 44365C42 6F6F4515 76DC4237
43202207 1D1E3131 31565631 1E370404 04040000 00010508 0808030E 0E0E0E0E 0E0E121F
6D18141D AE343341 44070714 28150F0F 0F0F3030 30303030 3030D55B 5B3D3D3D 3D38A0B9
B97C5C45 37402020 66376977 7777772B 950F8D8D 0F0F0F8D 6F454322 22071DE7 DF56CDCD
CD311337 04040404 00000039 08101008 05030E0E 0E0E030E 7224A218 35518825 4CED2514
07147976 0F0F0F0F 30303030 3030300F 0FD5C438 B0F9DE73 45402020 6E6615CC 7C575769
95953030 3030300F 8D0F0F0F 0F8D6945 200707E7 5151A451 DF56CD56 1E131C04 04040000
00391021 10080805 03030202 02050A2A 18E75151 1428414C 8E3F0707 79150F0F 0F0F0F0F
3030D595 156F4242 42443740 66660437 425C77B0 B02BC495 30303030 30301717 170F8D0F
0F0F0F0F 77042207 1DA45151 51355151 E7491313 13370404 00000001 39100808 08050302
02090902 711F4935 511D143B 9A8FC023 070752DC 8D8D8D0F 045C3645 454A4A4A 4020204A
5CCE692B 3838382B 3D5B5BD5 D5303030 30173030 173D0F8D 8D0F0F0F 0F155C01 20073551
51353551 A4A45114 07F2491C 04040000 01012108 08050302 09020A09 12090A67 071D1D1D
07072C74 91340722 24618D15 69424237 406E6E6E 664A4442 5C77CC2B 3D5B5B5B 5B5B5B5B
5BD53017 17173017 17171730 8D8D0F0F 0F0F0F76 5C010114 1D515151 A4A4A4A4 1D070707
14200161 00000B10 05080503 0202110A 120A1209 113F0714 1D1D0707 234A6636 20B43436
36253743 6E6E6640 455CABB1 87CF3017 5B5B5B5B 5B5B5B5B 5B3DD530 17171717 30171717
308D8D8D 0F0F0F0F 0F0F7361 430714E7 515151A4 51351D14 14141D43 01010000 21050805
26020A0A 0A11110A 02122A07 073B3F3F 07DB3704 0B574227 424A666E 6E664A42 737729CF
17303030 3030D55B 5B5B5B5B 5B3D3D30 30171717 17171730 30300F0F 0F0F0F0F 0F0F0F15
73222207 07143551 51A43551 51511D14 14220101 00001008 08260202 120A0912 0A3E1F67
66071318 24130753 252E2525 4A436E43 66442727 6F76760F 0F303017 17173030 30D53D5B
5B5B5B5B 30301717 17171730 30300F0F 0F0F0F0F 0F0F0F0F 69273B07 07070714 515151A4
51A4A451 1D140707 20010000 10100826 02021211 5A1F2A2A 6AA96625 2418249F 24343444
40E24A44 42422742 040F8D8D 0F0F3030 17171717 17173030 30D5D5D5 D5171717 17171717
3030300F 0F0F0F0F 0F0F0F0F 0F30273B 07070707 071D5151 5151A4A4 A4511D14 07072201
00001008 26090A3E 2A282828 183B5322 1C7F2428 34344A40 4A373736 27344A20 4415018D
0F0F0F30 30301717 17171717 30303030 17171717 17171717 1730300F 0F0F0F0F 0F0F0F0F
0F0F0F76 24140707 07070714 3551A4A4 A4A4A451 1D072207 22011600 66A22A2A 52981313
133F2220 20434257 37664A44 25342736 82250420 07141342 8D0F0F0F 0F171730 17171717
17171717 17171717 17171717 30303030 0F0F0F0F 0F0F0F30 3030950F BC1A2807 07071407
071D5151 51511D35 51351407 07070101 16004353 1CA2A2A2 13135343 01DC3604 44344025
7F852AB4 45343341 23071407 4924DC0F 0F0F0F30 17171717 17171717 17171717 17171717
17173030 300F0F0F 0F0F0F0F 30301717 7C5C2513 DB070707 0707141D E7E71D1D 51515151
E7140743 01011600 010B43B4 533B5366 374A6E66 6643402E 642C282A 2A184534 33411A14
14141488 25150F0F 0F0F305B 17171717 17171717 17171717 17173030 300F0F0F 0F0F0F0F
0F699529 29872B2E 07220707 07070714 1D1D1D1D 1D51A451 5151511D 43010101 01000101
01434322 20664A43 434A2518 22139F24 232C2813 1C34335F BA141414 14141869 0F0F0F0F
0F0F3030 30301717 5B173030 3030300F 0F0F0F0F 0F0F0F0F 0F0FEFCE 69772B7C C4732207
07141414 14141D1D 1D1D3551 51515151 1D220101 01010100 01010166 44444343 441C2223
1CB40707 13281813 49E78825 334C8E49 14141414 18690F0F 0F0F0F0F 0F0F0F0F 0F0F0F0F
0F0F0F0F 0F0F0F0F 0F0F0F0F 8D8D7670 42367729 877C2973 22071414 14141414 14141D14
1D355151 511D0707 43010101 01000101 0140444A 4A43441C 2222DB07 14141414 1D51511D
1D52502D 8E130714 14145337 8D0F0F0F 0F0F0F0F 0F0F0F0F 8D8D8D8D 0F0F0F0F 0F0F0F0F
0F0F155C 2C232040 36298777 29774307 14141414 14141414 14141414 1D351D14 14220101
01010100 01010101 6104DC43 22DB0707 0714141D 1D1D3551 35140713 1A3341BA 07141407
01010101 8D8D0F0F 0F8D8D0F 8D8D8D8D 8D8D0F0F 0F0F0F0F 0F0F0F69 7E183FDB 223B3639
76767636 0B012007 1414141D 1D1D1D1D 1D141414 07224301 01010101 01000101 01010101
01200707 07070707 141D1D1D 1D1D1414 073B2A33 919A2222 20010101 01010101 01010101
018D8D8D 8D8D8D8D 8D0F0F0F 0F0F0F0F 0F44B422 DB0722B4 4A010101 01040B01 01010143
43434343 43202022 20200101 01010101 01010100 01010101 01010143 07071414 14141D1D
1D351D14 07070707 524E2D48 43010101 01010101 01010101 01010101 01010101 01010101
8D8D8D8D 8D010101 20222207 22200101 01010101 01010101 01010101 01010101 01010101
01010101 01010101 01000101 01010101 01014322 22070707 141D351D 14141414 0707375E
33334301 01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101
01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010100
01010101 01010101 01010101 01012022 43010143 20222043 010B2020 43010101 01010101
01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101
01010101 01010101 01010101 01010101 01010101 01010101 01000101 01010101 01010101
01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101
01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101 01010101
01010101 01010101 01010101 01010100 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B
0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B
0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B 0B0B0B0B
0B0B0B0B 0B00
`;

const fourBitCLUT = `
10000000 08000000 2C000000 0000E001 10000100
0080177F 92760E72 6A45E71C F3397946 1F570080
00800080 00800080 FF7F1F00 0C020000 00000000
08002000 FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF
0F000000 00003000 00000040 334304F0 0F000000
00003033 33430000 403343F0 0F000000 00004434
33333304 004033F4 0F010000 00402443 44443433
430040F3 0F144400 44111111 21334444 344300F4
0F401111 11111111 11112112 434434F0 0F001411
11111111 11111122 221141F3 1F323311 11111111
11111111 111111F4 1F231111 11111111 11111111
111111F1 0F121211 11111111 11411111 111111F1
2F142113 11112111 11311411 111111F1 1F114212
21114211 11321413 121111F1 4F214321 34214331
11332413 221111F1 4F323442 33443432 22534434
313111F1 4F431343 33873433 33744743 431214F1
4F431334 63543533 33745544 334343F1 0F432434
76E55133 43481145 334343F3 0F004044 764E4534
84E84444 463334F3 0F000040 783E4548 87E834E3
673443F4 0F000000 781E3388 88E831E1 784644F4
0F000000 68E8EE88 88881E8E 787764F4 0F000000
76888887 88888888 787746F4 0F000000 64878888
88888888 774634F3 1F110000 34768878 77888877
664433F3 1F111101 34447688 88786746 443433F3
EFEE1E41 33646666 77664644 433333F3 EFEEEE11
33EE11E1 841E1134 433333F3 0FE0EE1E 3311EE1E
11FF4F44 443333F3 0F101111 E3EEE1EE F1F44F43
433433F3 0F008888 33E1EEEE 31FF4F34 333433F3
FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 00000000`;

function convertFromHexString(input: string): ArrayBuffer {
  const mapFn = (byte: string) => parseInt(byte, 16);
  const bytes = input
    .replace(/\n|\r|\s|\t/g, "")
    .trim()
    .match(/.{1,2}/g);

  if (!bytes) {
    return new Uint8Array(0).buffer;
  }

  const data = bytes.map(mapFn);

  return Uint8Array.from(data).buffer;
}

export const fourBitCLUTImage = convertFromHexString(fourBitCLUT);
export const eightBitCLUTImage = convertFromHexString(eightBitCLUT);