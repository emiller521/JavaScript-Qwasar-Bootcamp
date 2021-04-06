function my_robot_simulator(param_1)
{
    r = 0;
    y = 0;
    x = 0;
    i = 0;
    d = 0;

    result = "";
    dir = "";
    if (param_1.length == 0)
    {
        result = "{x: 0, y: 0, bearing: 'north'}";
        return (result);
    }
    while (i < param_1.length)
    {
        if (param_1[i] == 'A')
        {
            if (d % 2 == 0)
            {
                if (d == 0)
                    y--;
                else
                    y++;
            }
            else if (d == 1)
                x++;
            else
                x--;
        }
        if (param_1[i] == 'L')
            d--;
        if (param_1[i] == 'R')
        {
            r++;
            d++;
        }
        if (r == 4)
            r = 0;
        if (d == 4 || d == -4)
            r = 0;
        i++;
    }
    if (d == 0)
        dir = "'north'";
    if (d == 1 || d == -3)
        dir = "'east'";
    if (d == 2 || d == -2)
        dir = "'south'";
    if (d == 3 || d == -1)
        dir = "'west'";

    result = "{x: ".concat(x.toString());
    result = result.concat(", y: ".concat(y.toString()));
    result = result.concat(", bearing: ".concat(dir).concat("}"));
    return (result);
}
