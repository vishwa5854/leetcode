# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        ans = None
        
        while head is not None:
            one = ListNode(head.val)
            head = head.next
            
            if head:
                two = ListNode(head.val)
                head = head.next
                two.next = one
                two.next.next = ans
                ans = two
            else:
                one.next = ans
                ans = one
                
        return ans