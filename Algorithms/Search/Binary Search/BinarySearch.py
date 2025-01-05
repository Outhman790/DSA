import math;
def binary_search(arr, target, left = 0 , right = None ):
    if right == None:
        right = len(arr) - 1
    middle = math.floor((left + right) / 2) 
    if(left > right):   
        return 'Not found'
    if ( arr[middle] > target ):    
        return binary_search(arr, target, left, middle - 1 )
    if ( arr[middle] < target):
        return binary_search(arr, target, middle + 1, right )

    return middle;

print(binary_search([1,2,3,4,5,6,7],3))