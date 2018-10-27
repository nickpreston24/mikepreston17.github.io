/*	Author: Michael Preston
 *	Created Date: "10-26-2018"
 *  TODOs:
 *  1. Skips a color index when rotating().
 */
const MOVE_INTERVAL = 3000;
var interval;

jQuery(document).ready(function ($) {

    $('#checkbox').change(function () {
        if (this.checked) {
            interval = setInterval(function () {
                shiftColor(1);
                moveRight();
            }, MOVE_INTERVAL);
        } else if (!this.checked) clearInterval(interval);
    });

    //Hex codes only (nothing like 'cyan'), no RGB support at the moment:
    var backgroundColors = ['#612af3', '#91ea5e', '#600613', '#0ff', "#b00b00", "#de1e7e", "#e1e100", "#BADA55", "#F0FEAF", "#ac1d1c", "#f1e", "#c20773", '#c001ed', '#10ADE2', '#DBZ'];
    var currentColor = 0;

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    renderColors(backgroundColors[0]);

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function shiftColor(value) {
        value = value || 0;

        let hitBounds = (currentColor + value) % (backgroundColors.length) <= 0;
        currentColor = hitBounds ? (value > 0) ? 0 : backgroundColors.length + value : currentColor + value;

        let color = backgroundColors[currentColor];
        let comp = complement(color);

        $('li').css('background-color', color);
        $('a').css('color', comp);
        $('h1').text(color)
    }

    function renderColors(color) {
        let comp = complement(color);
        $('li').css('background-color', color);
        $('a').css('color', comp);
    }

    $('a.control_prev').click(function () {
        rotate(backgroundColors, true);
        shiftColor(-1);
        moveLeft();
    });

    $('a.control_next').click(function () {
        rotate(backgroundColors, false);
        shiftColor(1);
        moveRight();
    });

    function rotate(arr, reverse) {
        if (reverse)
            arr.unshift(arr.pop())
        else
            arr.push(arr.shift())
        return arr
    }

});

/*
 * From Stack Overflow:
 * https://stackoverflow.com/questions/1664140/js-function-to-calculate-complementary-colour#1664186
 */

// complement
function complement(color) {
    let rgb = color.startsWith('#') ? hexToRgb(color) : color;
    let temprgb = rgb;
    let temphsv = RGB2HSV(temprgb);
    temphsv.hue = HueShift(temphsv.hue, 180.0);
    temprgb = HSV2RGB(temphsv);

    //Have it leave as a string:
    let result = `rgb(${temprgb.r},${temprgb.g},${temprgb.b})`;
    return result;
}

//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function RGB2HSV(rgb) {
    hsv = new Object();
    max = max3(rgb.r, rgb.g, rgb.b);
    dif = max - min3(rgb.r, rgb.g, rgb.b);
    hsv.saturation = (max == 0.0) ? 0 : (100 * dif / max);
    if (hsv.saturation == 0) hsv.hue = 0;
    else if (rgb.r == max) hsv.hue = 60.0 * (rgb.g - rgb.b) / dif;
    else if (rgb.g == max) hsv.hue = 120.0 + 60.0 * (rgb.b - rgb.r) / dif;
    else if (rgb.b == max) hsv.hue = 240.0 + 60.0 * (rgb.r - rgb.g) / dif;
    if (hsv.hue < 0.0) hsv.hue += 360.0;
    hsv.value = Math.round(max * 100 / 255);
    hsv.hue = Math.round(hsv.hue);
    hsv.saturation = Math.round(hsv.saturation);
    return hsv;
}

function HSV2RGB(hsv) {
    var rgb = new Object();
    if (hsv.saturation == 0) {
        rgb.r = rgb.g = rgb.b = Math.round(hsv.value * 2.55);
    } else {
        hsv.hue /= 60;
        hsv.saturation /= 100;
        hsv.value /= 100;
        i = Math.floor(hsv.hue);
        f = hsv.hue - i;
        p = hsv.value * (1 - hsv.saturation);
        q = hsv.value * (1 - hsv.saturation * f);
        t = hsv.value * (1 - hsv.saturation * (1 - f));
        switch (i) {
            case 0:
                rgb.r = hsv.value;
                rgb.g = t;
                rgb.b = p;
                break;
            case 1:
                rgb.r = q;
                rgb.g = hsv.value;
                rgb.b = p;
                break;
            case 2:
                rgb.r = p;
                rgb.g = hsv.value;
                rgb.b = t;
                break;
            case 3:
                rgb.r = p;
                rgb.g = q;
                rgb.b = hsv.value;
                break;
            case 4:
                rgb.r = t;
                rgb.g = p;
                rgb.b = hsv.value;
                break;
            default:
                rgb.r = hsv.value;
                rgb.g = p;
                rgb.b = q;
        }
        rgb.r = Math.round(rgb.r * 255);
        rgb.g = Math.round(rgb.g * 255);
        rgb.b = Math.round(rgb.b * 255);
    }
    return rgb;
}

function HueShift(h, s) {
    h += s;
    while (h >= 360.0) h -= 360.0;
    while (h < 0.0) h += 360.0;
    return h;
}

function min3(a, b, c) {
    return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
}

function max3(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
}