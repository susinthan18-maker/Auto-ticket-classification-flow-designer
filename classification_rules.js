"use strict";

const RULES = [
  {
    category: "Network",
    assignmentGroup: "Network Support",
    keywords: ["wifi", "network", "internet", "connectivity"]
  },
  {
    category: "Account / Access",
    assignmentGroup: "Service Desk",
    keywords: ["password", "login", "sign in", "account access"]
  },
  {
    category: "Hardware",
    assignmentGroup: "Hardware Support",
    keywords: ["printer", "keyboard", "mouse", "monitor"]
  },
  {
    category: "Software",
    assignmentGroup: "Application Support",
    keywords: ["application error", "software error", "app crash"]
  }
];

function classifyTicket(ticket) {
  const text = (
    (ticket.shortDescription || "") + " " +
    (ticket.description || "")
  ).toLowerCase();

  const match = RULES.find(rule =>
    rule.keywords.some(keyword => text.includes(keyword))
  );

  if (!match) {
    return {
      matched: false,
      category: "Unclassified",
      assignmentGroup: "Manual Review"
    };
  }

  return {
    matched: true,
    category: match.category,
    assignmentGroup: match.assignmentGroup
  };
}

const ticket = {
  shortDescription: "Cannot connect to office wifi"
};

console.log(classifyTicket(ticket));

module.exports = { classifyTicket, RULES };
