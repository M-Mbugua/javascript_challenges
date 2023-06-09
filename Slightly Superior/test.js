Test.assertEquals(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]), true)
Test.assertEquals(isFirstSuperior(['a', 'b', 'c'], ['a', 'd', 'c']), false)
Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']), false)
Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'ant']), true)
Test.assertEquals(isFirstSuperior([true, true, false, true], [true, true, true, true]), false)
Test.assertEquals(isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]), true)
Test.assertEquals(isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']), false)
Test.assertEquals(isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale']), true)
Test.assertEquals(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]), false)
