param(
  [string]$ProgressionPath = "C:\Program Files (x86)\Steam\steamapps\common\7 Days To Die\Data\Config\progression.xml",
  [string]$LocalizationPath = "C:\Program Files (x86)\Steam\steamapps\common\7 Days To Die\Data\Config\Localization.txt",
  [string]$OutputPath = "src\data.ts"
)

if (-not (Test-Path -LiteralPath $ProgressionPath)) {
  throw "progression.xml was not found at: $ProgressionPath"
}

if (-not (Test-Path -LiteralPath $LocalizationPath)) {
  throw "Localization.txt was not found at: $LocalizationPath"
}

$outputDirectory = Split-Path -Parent $OutputPath

if (-not (Test-Path -LiteralPath $outputDirectory)) {
  New-Item -ItemType Directory -Path $outputDirectory | Out-Null
}

function JsonText {
  param([AllowNull()][string]$Value)

  return ($Value | ConvertTo-Json -Compress)
}

function Decode-GameText {
  param([AllowNull()][string]$Value)

  if ($null -eq $Value) {
    return ""
  }

  $result = $Value.Replace('\r\n', "`r`n")
  $result = $result.Replace('\n', "`n")
  $result = $result.Replace('\t', "`t")
  $result = $result.Replace('\"', '"')
  $result = $result.Replace('\\', '\')

  return $result.Trim()
}

function Get-EnglishText {
  param(
    [hashtable]$LocalizationByKey,
    [string]$Key,
    [string]$Fallback = ""
  )

  if ([string]::IsNullOrWhiteSpace($Key)) {
    return $Fallback
  }

  if ($LocalizationByKey.ContainsKey($Key)) {
    return Decode-GameText ([string]$LocalizationByKey[$Key])
  }

  return Decode-GameText $Fallback
}

function Get-Category {
  param([string]$Parent)

  $categoryMap = @{
    skillPerceptionCombat = "combat"
    skillPerceptionGeneral = "general"
    skillPerceptionScavenging = "scavenging"
    skillStrengthCombat = "combat"
    skillStrengthConstruction = "construction"
    skillStrengthGeneral = "general"
    skillFortitudeCombat = "combat"
    skillFortitudeSurvival = "survival"
    skillFortitudeRecovery = "recovery"
    skillAgilityCombat = "combat"
    skillAgilityAthletics = "athletics"
    skillAgilityStealth = "stealth"
    skillIntellectCombat = "combat"
    skillIntellectInfluence = "influence"
    skillIntellectCraftsmanship = "intellect"
    skillGeneralPerks = "general"
  }

  return $categoryMap[$Parent]
}

function Get-AttributeCost {
  param([int]$Level)

  if ($Level -le 1) {
    return 0
  }

  return [int][Math]::Round([Math]::Pow(1.14, $Level - 2))
}

function Get-AssetPath {
  param(
    [string]$Id,
    [hashtable]$AssetMap,
    [string]$Fallback = "/assets/common-icon.png"
  )

  if ($AssetMap.ContainsKey($Id)) {
    return $AssetMap[$Id]
  }

  return $Fallback
}

$assetMap = @{
  attPerception = "/assets/perception-icon.png"
  attStrength = "/assets/strength-icon.png"
  attFortitude = "/assets/fortitude-icon.png"
  attAgility = "/assets/agility-icon.png"
  attIntellect = "/assets/intellect-icon.png"
  attGeneralPerks = "/assets/common-icon.png"
  perkDeadEye = "/assets/dead-eye-icon.png"
  perkDemolitionsExpert = "/assets/demolitions-expert-icon.png"
  perkJavelinMaster = "/assets/spear-master-icon.png"
  perkFlurryOfPerception = "/assets/quick-and-perceptive-icon.png"
  perkInfiltrator = "/assets/the-infiltrator-icon.png"
  perkAnimalTracker = "/assets/animal-tracker-icon.png"
  perkPenetrator = "/assets/the-penetrator-icon.png"
  perkTreasureHunter = "/assets/treasure-hunter-icon.png"
  perkSalvageOperations = "/assets/salvage-operations-icon.png"
  perkPerceptionMastery = "/assets/perception-mastery-icon.png"
  perkBoomstick = "/assets/boomstick-icon.png"
  perkPummelPete = "/assets/pummel-pete.png"
  perkSkullCrusher = "/assets/skull-crusher-icon.png"
  perkGrandSlam = "/assets/grand-slam-icon.png"
  perkFlurryOfStrength = "/assets/lightning-hands-icon.png"
  perkPackMule = "/assets/pack-mule-icon.png"
  perkStrengthMastery = "/assets/strength-mastery-icon.png"
  perkMiner69r = "/assets/miner-69-er-icon.png"
  perkMotherLode = "/assets/mother-lode-icon.png"
  perkJunkMiner = "/assets/junk-miner-icon.png"
  perkBrawler = "/assets/the-brawler-icon.png"
  perkMachineGunner = "/assets/machine-gunner-icon.png"
  perkFlurryOfFortitude = "/assets/big-and-fast-icon.png"
  perkTheHuntsman = "/assets/the-huntsman-icon.png"
  perkPainTolerance = "/assets/pain-tolerance-icon.png"
  perkFortitudeMastery = "/assets/fortitude-mastery-icon.png"
  perkSiphoningStrikes = "/assets/siphoning-strikes-icon.png"
  perkHealingFactor = "/assets/healing-factor-icon.png"
  perkSlowMetabolism = "/assets/iron-gut-icon.png"
  perkRuleOneCardio = "/assets/rule-1-cardio-icon.png"
  perkArchery = "/assets/archery-icon.png"
  perkGunslinger = "/assets/gunslinger-icon.png"
  perkDeepCuts = "/assets/deep-cuts-icon.png"
  perkFlurryOfAgility = "/assets/whirlwind-icon.png"
  perkRunAndGun = "/assets/run-and-gun-icon.png"
  perkHardTarget = "/assets/hard-target-icon.png"
  perkParkour = "/assets/parkour-icon.png"
  perkAgilityMastery = "/assets/agility-mastery-icon.png"
  perkHiddenStrike = "/assets/hidden-strike-icon.png"
  perkFromTheShadows = "/assets/from-the-shadows-icon.png"
  perkElectrocutioner = "/assets/electrocutioner-icon.png"
  perkTurrets = "/assets/robotics-inventor-icon.png"
  perkFlurryOfIntellect = "/assets/calculated-attack-icon.png"
  perkBetterBarter = "/assets/better-barter-icon.png"
  perkDaringAdventurer = "/assets/the-daring-adventurer-icon.png"
  perkCharismaticNature = "/assets/charismatic-nature-icon.png"
  perkPhysician = "/assets/physician-icon.png"
  perkAdvancedEngineering = "/assets/advanced-engineering-icon.png"
  perkGreaseMonkey = "/assets/grease-monkey-icon.png"
  perkIntellectMastery = "/assets/intellect-mastery-icon.png"
  perkLightArmor = "/assets/light-armor-icon.png"
  perkMediumArmor = "/assets/medium-armor-icon.png"
  perkHeavyArmor = "/assets/heavy-armor-icon.png"
  perkMasterChef = "/assets/master-chef-icon.png"
  perkLivingOffTheLand = "/assets/living-off-the-lang-icon.png"
  perkLockPicking = "/assets/lock-picking-icon.png"
  perkLuckyLooter = "/assets/lucky-looter-icon.png"
}

$attributeOrder = @("attPerception", "attStrength", "attFortitude", "attAgility", "attIntellect", "attGeneralPerks")
$attributeNameOverrides = @{
  attPerception = "Perception"
  attStrength = "Strength"
  attFortitude = "Fortitude"
  attAgility = "Agility"
  attIntellect = "Intellect"
  attGeneralPerks = "Common perks"
}
$attributeDescriptionOverrides = @{
  attGeneralPerks = "Shared perks that are not tied to a primary attribute."
}

$rows = Import-Csv $LocalizationPath
$localizationByKey = @{}
foreach ($row in $rows) {
  if ($row.Key -and -not $localizationByKey.ContainsKey($row.Key)) {
    $localizationByKey[$row.Key] = [string]$row.english
  }
}

[xml]$progression = Get-Content $ProgressionPath

$attributeNodes = @{}
foreach ($attribute in $progression.progression.attributes.attribute) {
  $attributeNodes[[string]$attribute.name] = $attribute
}

$perksByAttribute = @{}
foreach ($attributeId in $attributeOrder) {
  $perksByAttribute[$attributeId] = New-Object System.Collections.Generic.List[object]
}

$attributeBySkill = @{
  skillPerceptionCombat = "attPerception"
  skillPerceptionGeneral = "attPerception"
  skillPerceptionScavenging = "attPerception"
  skillStrengthCombat = "attStrength"
  skillStrengthConstruction = "attStrength"
  skillStrengthGeneral = "attStrength"
  skillFortitudeCombat = "attFortitude"
  skillFortitudeSurvival = "attFortitude"
  skillFortitudeRecovery = "attFortitude"
  skillAgilityCombat = "attAgility"
  skillAgilityAthletics = "attAgility"
  skillAgilityStealth = "attAgility"
  skillIntellectCombat = "attIntellect"
  skillIntellectInfluence = "attIntellect"
  skillIntellectCraftsmanship = "attIntellect"
  skillGeneralPerks = "attGeneralPerks"
}

foreach ($perk in $progression.progression.perks.perk) {
  $parent = [string]$perk.parent
  if (-not $attributeBySkill.ContainsKey($parent)) {
    continue
  }

  $attributeId = $attributeBySkill[$parent]
  $attributeNode = $attributeNodes[$attributeId]
  $attributeName = if ($attributeNameOverrides.ContainsKey($attributeId)) {
    $attributeNameOverrides[$attributeId]
  } else {
    Get-EnglishText $localizationByKey ([string]$attributeNode.name_key) ([string]$attributeId)
  }

  $perkName = Get-EnglishText $localizationByKey ([string]$perk.name_key) ([string]$perk.name)
  $perkDescription = Get-EnglishText $localizationByKey ([string]$perk.desc_key) ""
  $maxLevel = if ($perk.max_level) { [int]$perk.max_level } else { 5 }
  $overrideCosts = @()
  if ($perk.override_cost) {
    $overrideCosts = ([string]$perk.override_cost) -split ',' | ForEach-Object { [int]$_ }
  }

  $levels = New-Object System.Collections.Generic.List[object]
  foreach ($levelNode in $perk.effect_group.effect_description) {
    $level = [int]$levelNode.level
    if ($level -lt 1 -or $level -gt $maxLevel) {
      continue
    }

    $requirementNode = $perk.level_requirements | Where-Object { [int]$_.level -eq $level } | Select-Object -First 1
    $attributeRequirement = if ($attributeId -eq "attGeneralPerks") { 0 } elseif ($requirementNode) { [int]$requirementNode.requirement.value } else { 1 }
    $cost = if ($overrideCosts.Count -ge $level) { $overrideCosts[$level - 1] } else { 1 }
    $levelName = Get-EnglishText $localizationByKey ([string]$levelNode.desc_key) "$perkName $level"
    $levelDescription = Get-EnglishText $localizationByKey ([string]$levelNode.long_desc_key) $perkDescription

    $levels.Add([pscustomobject]@{
      level = $level
      name = $levelName
      attributeRequirement = $attributeRequirement
      cost = $cost
      description = $levelDescription
    })
  }

  $levels = $levels | Sort-Object level

  $perksByAttribute[$attributeId].Add([pscustomobject]@{
    id = [string]$perk.name
    name = $perkName
    description = $perkDescription
    category = Get-Category $parent
    associatedAttribute = $attributeName
    icon = Get-AssetPath ([string]$perk.name) $assetMap
    levels = $levels
  })
}

$attributesOutput = New-Object System.Collections.Generic.List[string]
foreach ($attributeId in $attributeOrder) {
  $attributeNode = $attributeNodes[$attributeId]
  $attributeName = if ($attributeNameOverrides.ContainsKey($attributeId)) {
    $attributeNameOverrides[$attributeId]
  } else {
    Get-EnglishText $localizationByKey ([string]$attributeNode.name_key) ([string]$attributeId)
  }
  $attributeDescription = if ($attributeDescriptionOverrides.ContainsKey($attributeId)) {
    $attributeDescriptionOverrides[$attributeId]
  } else {
    Get-EnglishText $localizationByKey ([string]$attributeNode.desc_key) ""
  }
  $iconPath = Get-AssetPath $attributeId $assetMap

  $levelLines = New-Object System.Collections.Generic.List[string]
  if ($attributeId -ne "attGeneralPerks") {
    foreach ($levelNode in ($attributeNode.effect_group.effect_description | Sort-Object { [int]$_.level })) {
      $level = [int]$levelNode.level
      $levelName = Get-EnglishText $localizationByKey ([string]$levelNode.desc_key) "$attributeName $level"
      $levelDescription = Get-EnglishText $localizationByKey ([string]$levelNode.long_desc_key) $attributeDescription
      $cost = Get-AttributeCost $level
      $levelLines.Add("      { level: $level, name: $(JsonText $levelName), attributeRequirement: $level, cost: $cost, description: $(JsonText $levelDescription) }")
    }
  }

  $perkLines = New-Object System.Collections.Generic.List[string]
  foreach ($perkData in ($perksByAttribute[$attributeId] | Sort-Object name)) {
    $perkLevelLines = New-Object System.Collections.Generic.List[string]
    foreach ($levelData in $perkData.levels) {
      $perkLevelLines.Add("          { level: $($levelData.level), name: $(JsonText $levelData.name), attributeRequirement: $($levelData.attributeRequirement), cost: $($levelData.cost), description: $(JsonText $levelData.description) }")
    }

    $perkLines.Add(@(
      "      {"
      "        name: $(JsonText $perkData.name),"
      "        icon: new URL($(JsonText $perkData.icon), import.meta.url).href,"
      "        category: $(JsonText $perkData.category),"
      "        associatedAttribute: $(JsonText $perkData.associatedAttribute),"
      "        levels: ["
      ($perkLevelLines -join ",`r`n")
      "        ]"
      "      }"
    ) -join "`r`n")
  }

  $attributeBlock = New-Object System.Collections.Generic.List[string]
  $attributeBlock.Add("  {")
  $attributeBlock.Add("    name: $(JsonText $attributeName),")
  $attributeBlock.Add("    description: $(JsonText $attributeDescription),")
  $attributeBlock.Add("    icon: new URL($(JsonText $iconPath), import.meta.url).href,")
  if ($levelLines.Count -gt 0) {
    $attributeBlock.Add("    levels: [")
    $attributeBlock.Add(($levelLines -join ",`r`n"))
    $attributeBlock.Add("    ],")
  }
  $attributeBlock.Add("    perks: [")
  $attributeBlock.Add(($perkLines -join ",`r`n"))
  $attributeBlock.Add("    ]")
  $attributeBlock.Add("  }")

  $attributesOutput.Add(($attributeBlock -join "`r`n"))
}

$output = @(
  "import { Attribute } from './types';"
  ""
  "// DO NOT EDIT THIS FILE MANUALLY."
  "// Generated from official 7 Days to Die progression/localization files."
  "// Run scripts/generate-data-from-game.ps1 to refresh this file."
  "export const attributes: Attribute[] = ["
  ($attributesOutput -join ",`r`n")
  "];"
  ""
) -join "`r`n"

Set-Content -Path $OutputPath -Value $output -Encoding UTF8
