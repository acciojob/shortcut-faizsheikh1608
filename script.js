function shortcut(s1, s2) {
  // your code here
	s1 = s1.trim();
	s2 = s2.trim();
	if(!s1 || !s2) return "";

	return s1[0] + "" + s2[0];
}

// Do not change the code below.
const s1 = prompts("Enter s1:");
const s2 = prompts("Enter s2:");
alert(shortcut(s1, s2));
