class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sum_till_now = 0
        arr_length = len(nums)
        for i in range(arr_length):
            nums[i] += sum_till_now
            sum_till_now = nums[i]
        return nums
            