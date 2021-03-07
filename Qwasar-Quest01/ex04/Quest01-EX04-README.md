In our coding journey, one of the most useful skills we will have to train is debugging.

What is debugging?


Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system.


Debugging tactics can involve interactive debugging, control flow analysis, unit testing, integration testing, log file analysis, monitoring at the application or system level, memory dumps, and profiling.


It's a funny term, maybe a little of history will enlight us: The terms "bug" and "debugging" are popularly attributed to Admiral Grace Hopper in the 1940s. While she was working on a Mark II computer at Harvard University, her associates discovered a moth stuck in a relay and thereby impeding operation, whereupon she remarked that they were "debugging" the system. However, the term "bug", in the sense of "technical error", dates back at least to 1878 and Thomas Edison (see software bug for a full discussion). Similarly, the term "debugging" seems to have been used as a term in aeronautics before entering the world of computers. Indeed, in an interview Grace Hopper remarked that she was not coining the term.[citation needed] The moth fit the already existing terminology, so it was saved. A letter from J. Robert Oppenheimer (director of the WWII atomic bomb "Manhattan" project at Los Alamos, NM) used the term in a letter to Dr. Ernest Lawrence at UC Berkeley, dated October 27, 1944, regarding the recruitment of additional technical staff.


The Oxford English Dictionary entry for "debug" quotes the term "debugging" used in reference to airplane engine testing in a 1945 article in the Journal of the Royal Aeronautical Society. An article in "Airforce" (June 1945 p. 50) also refers to debugging, this time of aircraft cameras. Hopper's bug was found on September 9, 1947. Computer programmers did not adopt the term until the early 1950s. The seminal article by Gill in 1951 is the earliest in-depth discussion of programming errors, but it does not use the term "bug" or "debugging". In the ACM's digital library, the term "debugging" is first used in three papers from 1952 ACM National Meetings. Two of the three use the term in quotation marks. By 1963 "debugging" was a common-enough term to be mentioned in passing without explanation on page 1 of the CTSS manual.


This is an abstract concept, technically if we have to translate: it's printing what our code is doing to understand WHY it's not doing what we want it to do.


Our assignment is: First step into debugging is printing, let's print something in Javascript

Create an index.html with a script tag. This script tag will have a script tag which will execute a console.log("My first print");
