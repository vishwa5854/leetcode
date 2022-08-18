class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        ans = -1
        left_sum = 0
        right_sum = sum(nums) - nums[0]
        arr_length = len(nums)
        
        if left_sum == right_sum:
            return 0

        for i in range(1, arr_length):
            if left_sum == right_sum:
                ans = i - 1
                break
                
            left_sum += nums[i - 1]
            right_sum -= nums[i]
            
            if left_sum == right_sum:
                ans = i
                break

        return ans