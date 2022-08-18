# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        ans = None
        
        if list1 is None:
            return list2
        
        if list2 is None:
            return list1
        
        if list1.val <= list2.val:
            ans = ListNode(list1.val)
            list1 = list1.next
        else:
            ans = ListNode(list2.val)
            list2 = list2.next
        
        backup = ans
        
        while ((list1 is not None) and (list2 is not None)):
            if list1.val <= list2.val:
                ans.next = ListNode(list1.val)
                list1 = list1.next
            else:
                ans.next = ListNode(list2.val)
                list2 = list2.next
            
            ans = ans.next
            
        while list1 is not None:
            ans.next = ListNode(list1.val)
            list1 = list1.next
            ans = ans.next
            
        while list2 is not None:
            ans.next = ListNode(list2.val)
            list2 = list2.next
            ans = ans.next
            
        return backup