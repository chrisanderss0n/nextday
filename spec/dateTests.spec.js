"use strict";

var Nextday = require("../src/nextday.js");

describe("Next working day from each day of the week.", function() {
	it("Gets the next week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016").getTime()).to.equal(new Date("9/5/2016").getTime());
	});

	it("Gets the next week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016").getTime()).to.equal(new Date("9/6/2016").getTime());
	});

	it("Gets the next week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016").getTime()).to.equal(new Date("9/7/2016").getTime());
	});

	it("Gets the next week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016").getTime()).to.equal(new Date("9/8/2016").getTime());
	});

	it("Gets the next week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016").getTime()).to.equal(new Date("9/9/2016").getTime());
	});

	it("Gets the next week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016").getTime()).to.equal(new Date("9/12/2016").getTime());
	});

	it("Gets the next week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016").getTime()).to.equal(new Date("9/12/2016").getTime());
	});
});

describe("Second working day from each day of the week.", function() {
	it("Gets the second week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 2).getTime()).to.equal(new Date("9/6/2016").getTime());
	});

	it("Gets the second week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 2).getTime()).to.equal(new Date("9/7/2016").getTime());
	});

	it("Gets the second week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 2).getTime()).to.equal(new Date("9/8/2016").getTime());
	});

	it("Gets the second week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 2).getTime()).to.equal(new Date("9/9/2016").getTime());
	});

	it("Gets the second week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 2).getTime()).to.equal(new Date("9/12/2016").getTime());
	});

	it("Gets the second week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 2).getTime()).to.equal(new Date("9/13/2016").getTime());
	});

	it("Gets the second week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 2).getTime()).to.equal(new Date("9/13/2016").getTime());
	});
});

describe("Third working day from each day of the week.", function() {
	it("Gets the third week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 3).getTime()).to.equal(new Date("9/7/2016").getTime());
	});

	it("Gets the third week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 3).getTime()).to.equal(new Date("9/8/2016").getTime());
	});

	it("Gets the third week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 3).getTime()).to.equal(new Date("9/9/2016").getTime());
	});

	it("Gets the third week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 3).getTime()).to.equal(new Date("9/12/2016").getTime());
	});

	it("Gets the third week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 3).getTime()).to.equal(new Date("9/13/2016").getTime());
	});

	it("Gets the third week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 3).getTime()).to.equal(new Date("9/14/2016").getTime());
	});

	it("Gets the third week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 3).getTime()).to.equal(new Date("9/14/2016").getTime());
	});
});

// get the fourth week-day starting from each day of the week
describe("Fourth working day from each day of the week.", function() {
	it("Gets the fourth week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 4).getTime()).to.equal(new Date("9/8/2016").getTime());
	});

	it("Gets the fourth week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 4).getTime()).to.equal(new Date("9/9/2016").getTime());
	});

	it("Gets the fourth week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 4).getTime()).to.equal(new Date("9/12/2016").getTime());
	});

	it("Gets the fourth week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 4).getTime()).to.equal(new Date("9/13/2016").getTime());
	});

	it("Gets the fourth week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 4).getTime()).to.equal(new Date("9/14/2016").getTime());
	});

	it("Gets the fourth week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 4).getTime()).to.equal(new Date("9/15/2016").getTime());
	});

	it("Gets the fourth week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 4).getTime()).to.equal(new Date("9/15/2016").getTime());
	});
});

// get the fifth week-day starting from each day of the week
describe("Fifth working day from each day of the week.", function() {
	it("Gets the fifth week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 5).getTime()).to.equal(new Date("9/9/2016").getTime());
	});

	it("Gets the fifth week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 5).getTime()).to.equal(new Date("9/12/2016").getTime());
	});

	it("Gets the fifth week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 5).getTime()).to.equal(new Date("9/13/2016").getTime());
	});

	it("Gets the fifth week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 5).getTime()).to.equal(new Date("9/14/2016").getTime());
	});

	it("Gets the fifth week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 5).getTime()).to.equal(new Date("9/15/2016").getTime());
	});

	it("Gets the fifth week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 5).getTime()).to.equal(new Date("9/16/2016").getTime());
	});

	it("Gets the fifth week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 5).getTime()).to.equal(new Date("9/16/2016").getTime());
	});
});

describe("Sixth working day from each day of the week.", function() {
	it("Gets the sixth week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 6).getTime()).to.equal(new Date("9/12/2016").getTime());
	});

	it("Gets the sixth week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 6).getTime()).to.equal(new Date("9/13/2016").getTime());
	});

	it("Gets the sixth week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 6).getTime()).to.equal(new Date("9/14/2016").getTime());
	});

	it("Gets the sixth week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 6).getTime()).to.equal(new Date("9/15/2016").getTime());
	});

	it("Gets the sixth week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 6).getTime()).to.equal(new Date("9/16/2016").getTime());
	});

	it("Gets the sixth week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 6).getTime()).to.equal(new Date("9/19/2016").getTime());
	});

	it("Gets the sixth week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 6).getTime()).to.equal(new Date("9/19/2016").getTime());
	});
});

describe("Seventh working day from each day of the week.", function() {
	it("Gets the seventh week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 7).getTime()).to.equal(new Date("9/13/2016").getTime());
	});

	it("Gets the seventh week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 7).getTime()).to.equal(new Date("9/14/2016").getTime());
	});

	it("Gets the seventh week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 7).getTime()).to.equal(new Date("9/15/2016").getTime());
	});

	it("Gets the seventh week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 7).getTime()).to.equal(new Date("9/16/2016").getTime());
	});

	it("Gets the seventh week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 7).getTime()).to.equal(new Date("9/19/2016").getTime());
	});

	it("Gets the seventh week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 7).getTime()).to.equal(new Date("9/20/2016").getTime());
	});

	it("Gets the seventh week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 7).getTime()).to.equal(new Date("9/20/2016").getTime());
	});
});

describe("Eighth working day from each day of the week.", function() {
	it("Gets the eighth week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 8).getTime()).to.equal(new Date("9/14/2016").getTime());
	});

	it("Gets the eighth week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 8).getTime()).to.equal(new Date("9/15/2016").getTime());
	});

	it("Gets the eighth week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 8).getTime()).to.equal(new Date("9/16/2016").getTime());
	});

	it("Gets the eighth week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 8).getTime()).to.equal(new Date("9/19/2016").getTime());
	});

	it("Gets the eighth week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 8).getTime()).to.equal(new Date("9/20/2016").getTime());
	});

	it("Gets the eighth week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 8).getTime()).to.equal(new Date("9/21/2016").getTime());
	});

	it("Gets the eighth week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 8).getTime()).to.equal(new Date("9/21/2016").getTime());
	});
});

describe("Ninth working day from each day of the week.", function() {
	it("Gets the ninth week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 9).getTime()).to.equal(new Date("9/15/2016").getTime());
	});

	it("Gets the ninth week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 9).getTime()).to.equal(new Date("9/16/2016").getTime());
	});

	it("Gets the ninth week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 9).getTime()).to.equal(new Date("9/19/2016").getTime());
	});

	it("Gets the ninth week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 9).getTime()).to.equal(new Date("9/20/2016").getTime());
	});

	it("Gets the ninth week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 9).getTime()).to.equal(new Date("9/21/2016").getTime());
	});

	it("Gets the ninth week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 9).getTime()).to.equal(new Date("9/22/2016").getTime());
	});

	it("Gets the ninth week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 9).getTime()).to.equal(new Date("9/22/2016").getTime());
	});
});

describe("Tenth working day from each day of the week.", function() {
	it("Gets the tenth week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 10).getTime()).to.equal(new Date("9/16/2016").getTime());
	});

	it("Gets the tenth week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 10).getTime()).to.equal(new Date("9/19/2016").getTime());
	});

	it("Gets the tenth week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 10).getTime()).to.equal(new Date("9/20/2016").getTime());
	});

	it("Gets the tenth week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 10).getTime()).to.equal(new Date("9/21/2016").getTime());
	});

	it("Gets the tenth week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 10).getTime()).to.equal(new Date("9/22/2016").getTime());
	});

	it("Gets the tenth week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 10).getTime()).to.equal(new Date("9/23/2016").getTime());
	});

	it("Gets the tenth week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 10).getTime()).to.equal(new Date("9/23/2016").getTime());
	});
});

describe("Fourty second working day from each day of the week.", function() {
	it("Gets the fourty second week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 42).getTime()).to.equal(new Date("11/1/2016").getTime());
	});

	it("Gets the fourty second week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 42).getTime()).to.equal(new Date("11/2/2016").getTime());
	});

	it("Gets the fourty second week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 42).getTime()).to.equal(new Date("11/3/2016").getTime());
	});

	it("Gets the fourty second week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 42).getTime()).to.equal(new Date("11/4/2016").getTime());
	});

	it("Gets the fourty second week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 42).getTime()).to.equal(new Date("11/7/2016").getTime());
	});

	it("Gets the fourty second week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 42).getTime()).to.equal(new Date("11/8/2016").getTime());
	});

	it("Gets the fourty second week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 42).getTime()).to.equal(new Date("11/8/2016").getTime());
	});
});

describe("One hundred working days from each day of the week.", function() {
	it("Gets the 100th week-day starting on Sunday", function() {
		expect(Nextday.next("9/4/2016", 100).getTime()).to.equal(new Date("1/20/2017").getTime());
	});

	it("Gets the 100th week-day starting on Monday", function() {
		expect(Nextday.next("9/5/2016", 100).getTime()).to.equal(new Date("1/23/2017").getTime());
	});

	it("Gets the 100th week-day starting on Tuesday", function() {
		expect(Nextday.next("9/6/2016", 100).getTime()).to.equal(new Date("1/24/2017").getTime());
	});

	it("Gets the 100th week-day starting on Wednesday", function() {
		expect(Nextday.next("9/7/2016", 100).getTime()).to.equal(new Date("1/25/2017").getTime());
	});

	it("Gets the 100th week-day starting on Thursday", function() {
		expect(Nextday.next("9/8/2016", 100).getTime()).to.equal(new Date("1/26/2017").getTime());
	});

	it("Gets the 100th week-day starting on Friday", function() {
		expect(Nextday.next("9/9/2016", 100).getTime()).to.equal(new Date("1/27/2017").getTime());
	});

	it("Gets the 100th week-day starting on Saturday", function() {
		expect(Nextday.next("9/10/2016", 100).getTime()).to.equal(new Date("1/27/2017").getTime());
	});
});

// ...
// get the 15th week-day starting from each day of the week

describe("Next week-day toward the end of the month.", function() {
	it("Get the next week-day starting from the last day of the month when tomorrow is a week-day", function() {
		expect(Nextday.next("8/31/2016").getTime()).to.equal(new Date("9/1/2016").getTime());
	});

	it("Get the next week-day starting from the last day of the month when tomorrow is a week-end", function() {
		expect(Nextday.next("9/30/2016").getTime()).to.equal(new Date("10/3/2016").getTime());
	});
});

describe("Second week-day toward the end of the month.", function() {
	it("Get the second week-day starting from the last day of the month when tomorrow is a week-day", function() {
		expect(Nextday.next("8/31/2016", 2).getTime()).to.equal(new Date("9/2/2016").getTime());
	});

	it("Get the second week-day starting from the last day of the month when tomorrow is a week-end", function() {
		expect(Nextday.next("9/30/2016", 2).getTime()).to.equal(new Date("10/4/2016").getTime());
	});

	it("Get the second week-day starting from the last day of the month when the second day is a week-end", function() {
		expect(Nextday.next("9/1/2016", 2).getTime()).to.equal(new Date("9/5/2016").getTime());
	});
});

describe("Fifth week-day toward the end of the month.", function() {
	it("Get the fifth week-day starting from the last day of the month when tomorrow is a week-day", function() {
		expect(Nextday.next("8/31/2016", 5).getTime()).to.equal(new Date("9/7/2016").getTime());
	});

	it("Get the fifth week-day starting from the last day of the month when tomorrow is a week-end", function() {
		expect(Nextday.next("9/30/2016", 5).getTime()).to.equal(new Date("10/7/2016").getTime());
	});

	it("Get the fifth week-day starting from the last day of the month when the fifth day is a week-end", function() {
		expect(Nextday.next("2/1/2016", 5).getTime()).to.equal(new Date("2/8/2016").getTime());
	});
});

describe("Next week-day last day of the month before the end of the year.", function() {
	it("Get the next week-day starting from the last day of the month before the end of the year when tomorrow is a week-day", function() {
		expect(Nextday.next("12/31/2017").getTime()).to.equal(new Date("1/1/2018").getTime());
	});

	it("Get the next week-day starting from the last day of the month before the end of the year when tomorrow is a week-end", function() {
		expect(Nextday.next("12/31/2016").getTime()).to.equal(new Date("1/2/2017").getTime());
	});
});