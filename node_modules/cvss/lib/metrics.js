exports.defaults = {
  AV: 'P', AC: 'L', PR: 'H', UI: 'R',
  S: 'U', C: 'N', I: 'N', A: 'N',
  E: 'X', RL: 'X', RC: 'X',
  MAV: 'X', MAC: 'X', MPR: 'X', MUI: 'X',
  MS: 'X', MC: 'X', MI: 'X', MA: 'X'
};

var toScore = exports.toScore = {
  // 2. Base metrics
  // 2.1 Exploitability metrics -- describe the properties of the vulnerabilty that lead to a successful attack
  // 2.1.1 Attack vector -- is the vulnerability exploitable from the Internet, adjacent or local networks, or only the physical device?
  AV: { N: 0.85, A: 0.62, L: 0.55, P: 0.2 },
  // 2.1.2 Attack complexity -- is it simple or complex to exploit this vulnerability?
  AC: { L: 0.77, H: 0.44 },
  // 2.1.3 Privileges required -- does the vulnerability require no, low, or high privileges to run?
  PR: {
    N: 0.85,
    L: function (vector) {
      return (vector.S === 'C') ? 0.68 : 0.62;
    },
    H: function (vector) {
      return (vector.S === 'C') ? 0.5 : 0.27;
    }
  },
  // 2.1.4 User interaction -- does the vulnerability require user interaction
  UI: { N: 0.85, R: 0.62 },
  // 2.2 Scope -- does the vulnerability allow access beyond the vulnerable component
  S: { U: 0.0, C: 1.0 },
  // 2.3 Impact metrics -- level of impact to confidentiality, integrity, availability of affected systems/data
  // 2.3.1 Confidentiality impact
  C: { H: 0.56, L: 0.22, N: 0.0 },
  // 2.3.2 Integrity impact
  I: { H: 0.56, L: 0.22, N: 0.0 },
  // 2.3.3 Availability impact
  A: { H: 0.56, L: 0.22, N: 0.0 },

  // 3. Temporal metrics -- maturity of exploit, level of remediation available, confidence of vulnerability reported
  // 3.1 Exploit code maturity
  E: { X: 1.0, H: 1.0, F: 0.97, P: 0.94, U: 0.91 },
  // 3.2 Remediation Level
  RL: { X: 1.0, U: 1.0, W: 0.97, T: 0.96, O: 0.95 },
  // 3.3 Report Confidence
  RC: { X: 1.0, C: 1.0, R: 0.96, U: 0.92 },

  // 4. Environmental metrics
  // 4.1. Security requirements
  // 4.1.1 Confidentiality Requirement
  CR: { X: 1.00, H: 1.5, M: 1.0, L: 0.5 },
  // 4.1.2 Integrity Requirement
  IR: { X: 1.00, H: 1.5, M: 1.0, L: 0.5 },
  // 4.1.3 Accessibility Requirement
  AR: { X: 1.00, H: 1.5, M: 1.0, L: 0.5 },
  // 4.2. Modified base metrics
  MAV: {
    N: 0.85, A: 0.62, L: 0.55, P: 0.2,
    X: function (vector, scores) {
      return scores.AV;
    }
  },
  MAC: {
    L: 0.77, H: 0.44,
    X: function (vector, scores) {
      return scores.AC;
    },
  },
  MPR: {
    N: 0.85,
    L: function (vector) {
      var isChange = ('MS' in vector) ? vector.MS === 'C' : vector.S === 'C';
      return (isChange) ? 0.68 : 0.62;
    },
    H: function (vector) {
      var isChange = ('MS' in vector) ? vector.MS === 'C' : vector.S === 'C';
      return (isChange) ? 0.5 : 0.27;
    },
    X: function (vector, scores) {
      return scores.PR;
    },
  },
  MUI: {
    N: 0.85, R: 0.62,
    X: function (vector, scores) {
      return scores.UI;
    },
  },
  // 
  MS: {
    X: function (vector, scores) {
      return scores.S;
    },
    U: 0.0,
    C: 1.0
  },
  MC: {
    H: function (_, scores) {
      return toScore.C.H * scores.CR;
    },
    L: function (_, scores) {
      return toScore.C.L * scores.CR
    },
    N: 0.0,
    X: function (_, scores) {
      return scores.C * scores.CR;
    }
  },
  MI: {
    H: function (_, scores) {
      return toScore.I.H * scores.IR;
    },
    L: function (_, scores) {
      return toScore.I.L * scores.IR
    },
    N: 0.0,
    X: function (_, scores) {
      return scores.I * scores.IR;
    }
  },
  MA: {
    H: function (_, scores) {
      return toScore.A.H * scores.AR;
    },
    L: function (_, scores) {
      return toScore.A.L * scores.AR
    },
    N: 0.0,
    X: function (_, scores) {
      return scores.A * scores.AR;
    }
  }
};