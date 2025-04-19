// Using values provided through constants (includes/constants.js)
function customerSegment(column) {
    return `
        CASE
            WHEN ${column} > ${constants.platinum_threshold} THEN "platinum"
            WHEN ${column} > ${constants.gold_threshold} THEN "gold"
            WHEN ${column} > ${constants.silver_threshold} THEN "silver"
        ELSE
            "bronze"
        END`;
}

module.exports = { customerSegment };