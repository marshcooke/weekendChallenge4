console.log('step 1');

var myApp = angular.module('myApp', []);

var photosArray = [
    {
        image: '../images/kayak.JPG',
        description: 'Kayaking in the channel between Cedar Lake & Lake of the Isles!',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/roommates.JPG',
        description: 'My best friend, sister, mother, child, and roommate.',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/london.JPG',
        description: 'On the London Bridge after Borough Market, before a night full of fun with Love Actually and Aussies (and Katie Campbell).',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/loch_lomond.JPG',
        description: 'The most beautiful hike in my life to date - on the banks of Loch Lomond.',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/public_art.JPG',
        description: 'Structured art in Minneapolis.',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/madeline_june.JPG',
        description: 'My favorite tiny person, Madeline, in June.',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/madeline_september.JPG',
        description: 'My favorite tiny person, Madeline, in September.',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/siblings.JPG',
        description: 'Never make a companion equal to a brother; myself with my brothers, Morgan and Andrew.',
        likes: 0,
        visible: true,
        descVisible: false
    },
    {
        image: '../images/family.JPG',
        description: 'Andrew, Mary, Sarah, Frances, Morgan, Mom, Dad, and Grandma; only missing the tiny person.',
        likes: 0,
        visible: true,
        descVisible: false
    },
];

myApp.controller('PhotoController', function () {
    console.log('ng');

    var vm = this;
    vm.image = photosArray;
    console.log(photosArray);

    vm.show = function (image) {
        console.log('vm show photo function');
        if (photosArray.visible === true) {
            photosArray.descVisible
        }
    };

    vm.toggle = function (image) {
        console.log(image);
        image.visible = !image.visible;
        console.log(image.visible);
    };
});