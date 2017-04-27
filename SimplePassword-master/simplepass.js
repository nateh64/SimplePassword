function checkString(str)
{
    if(str.length > 8 && str.length < 14)
    {
        return str;
    }
    else
    {
        if(str.length < 8)
        {
            throw new RangeError("need more characters");
        }
        if (str.length > 14)
        {
            throw new RangeError("need less characters");
        }
    }
}


//type getString below
function getString(str)
{
    try {
        checkString(str);
    } catch (e) {
        console.log(e.message);
    }

}

getString('too long');
