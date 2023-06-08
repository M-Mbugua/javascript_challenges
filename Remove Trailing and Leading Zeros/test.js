Test.assertEquals(removeLeadingTrailing("230.000"), "230")
Test.assertEquals(removeLeadingTrailing("00402"), "402")
Test.assertEquals(removeLeadingTrailing("03.1400"), "3.14")
Test.assertEquals(removeLeadingTrailing("30"), "30")
Test.assertEquals(removeLeadingTrailing("30.0000"), "30")
Test.assertEquals(removeLeadingTrailing("24340"), "24340")
Test.assertEquals(removeLeadingTrailing("0404040"), "404040")
Test.assertEquals(removeLeadingTrailing("0"), "0")
Test.assertEquals(removeLeadingTrailing("00"), "0")
Test.assertEquals(removeLeadingTrailing("0.000000"), "0")
Test.assertEquals(removeLeadingTrailing("0000.000"), "0")
Test.assertEquals(removeLeadingTrailing("00.0001"), "0.0001")
Test.assertEquals(removeLeadingTrailing("10000"), "10000")
Test.assertEquals(removeLeadingTrailing("1345"), "1345")
Test.assertEquals(removeLeadingTrailing("30.000020"), "30.00002")
Test.assertEquals(removeLeadingTrailing("00200.1900001"), "200.1900001")