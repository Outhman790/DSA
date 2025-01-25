def is_palindrome(x):
    if x < 0:
        return False
    x = str(x)
    left = 0
    right = len(x) - 1
    while left < right:
        if x[left] != x[right]:
            return False
        left += 1
        right -= 1
    return True

# Test cases
print(is_palindrome(10))   
print(is_palindrome(121))   
print(is_palindrome(-121)) 