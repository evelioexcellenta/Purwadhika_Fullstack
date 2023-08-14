function larrysArray(A){
    const value_index_map =[]
    for (let i=0; i<A.length; i++){
        const val = A[i]
        value_index_map[val]=i
    }

    function abc_to_bca (b_val){
        const b_index = value_index_map[b_val]

        const a_index = b_index - 1
        const c_index = b_index + 1

        const a_val = A[a_index]
        const c_val = A[c_index]

        A[a_index] = b_val
        A[b_index] = c_val
        A[c_index] = a_val

        value_index_map[b_val] = a_index
        value_index_map[c_val] = b_index
        value_index_map[a_val] = c_index

    }


    function abc_to_cab (c_val){
        const c_index = value_index_map[c_val]

        const a_index = c_index - 2
        const b_index = c_index + 1

        const a_val = A[a_index]
        const b_val = A[b_index]

        A[a_index] = c_val
        A[b_index] = a_val
        A[c_index] = b_val

        value_index_map[c_val] = a_index
        value_index_map[a_val] = b_index
        value_index_map[b_val] = c_index

    }

    const pre_process_max = A.length - 3

    for

}