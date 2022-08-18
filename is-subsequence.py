class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_len = len(s)
        t_len = len(t)
        cursor = 0
        
        if s_len > t_len:
            return False
        
        for i in range(t_len):
            if cursor >= s_len:
                break
                
            if s[cursor] == t[i]:
                cursor += 1
        
        if cursor == s_len:
            return True
            