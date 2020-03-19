# def test(name):
#   return ("hello " + name)

# print(test("tom"))


def wordBreak(s, wordDict):
    table = [False] * (len(s) + 1)
    table[0] = True
    
    for i in range(0, len(table)):
      if (table[i] == True):
        for j in range(i + 1, len(table)):
          word = s[i:j]
          if word in wordDict:
            table[j] = True
            
    return table[-1]

n = wordBreak("catdogcat", ["cat", "dog"])
print(n)