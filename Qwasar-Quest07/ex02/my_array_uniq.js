function my_array_uniq(param_1) {
    var ret = [];
    var here = 0;
    var k = 0;
    for (var i = 0; i < param_1.length; i++)
    {
        here = 0;
        for (var j = 0; j < ret.length; j++)
        {
            if (param_1[i] == ret[j])
            {
                here = 1;
                break;
            }
        }
        if (here == 0)
        {
            ret[k] = param_1[i];
            k++;
        }
    }
    return (ret);
}
