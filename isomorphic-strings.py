class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        mapper = {}
        
        available = {}
        
        for i in t:
            available[i] = True
        
        s_len = len(s)
        t_len = len(t)
        
        if (s_len != t_len):
            return False
        
        if ((s_len == 1) and (t_len == 1)):
            return True
        
        for i in range(s_len):
            try:
                if (mapper[s[i]] != t[i]):
                    return False
            except KeyError:
                if available[t[i]]:
                    mapper[s[i]] = t[i]
                    available[t[i]] = False
                else:
                    return False
                
        return True